import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule//importamos el modulo compartido para poder usar los componentes que exportamos en el  SharedModule
  ],
  exports:[
    HomePageComponent
  ]
})
export class GifsModule { }
