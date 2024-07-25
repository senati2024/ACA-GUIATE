import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component'; // Asegúrate de que la ruta sea correcta

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent] // Exportar para usar en otros módulos
})
export class HeaderModule { }
