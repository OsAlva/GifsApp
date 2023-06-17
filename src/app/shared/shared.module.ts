import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,//exportamos el componente para poder usarlo en otros modulos
    LazyImageComponent //exportamos el componente para poder usarlo en otros modulos
  ]
})
export class SharedModule { }
