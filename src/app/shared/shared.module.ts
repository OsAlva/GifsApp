import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent//exportamos el componente para poder usarlo en otros modulos
  ]
})
export class SharedModule { }
