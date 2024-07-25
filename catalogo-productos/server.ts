import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bootstrap from './src/main.server';

// Obtener la ruta del archivo actual usando CommonJS
const __filename = fileURLToPath(new URL('', import.meta.url)); // No necesitas esto si usas CommonJS
const __dirname = path.dirname(__filename); // No necesitas esto si usas CommonJS

function app(): express.Express {
  const server = express();
  const serverDistFolder = __dirname; // Ajusta esto si usas CommonJS
  const browserDistFolder = path.resolve(serverDistFolder, '../browser');
  const indexHtml = path.join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Servir archivos estáticos desde /browser
  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }));

  // Todas las rutas regulares usan el motor Angular
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4200;

  // Iniciar el servidor Node
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
