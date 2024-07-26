// src/app/app.server.module.ts
import { NgModule } from '@angular/core';
import 'zone.js/node'; // import para usar en el servidor
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    AppModule,
    ServerModule
  ],
  bootstrap: [AppComponent],

})
export class AppServerModule {}
