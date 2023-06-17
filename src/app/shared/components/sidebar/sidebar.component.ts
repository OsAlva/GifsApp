import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
//inyectar el servicio y en el html duplicamos segun cuantos elementos tenga el servicio private gifsService: GifsService
 
  //inyectamos primero el servicio
  constructor(private gifsService: GifsService ) { }

  get tags() {
    return this.gifsService.tagHistory;
  }


  



}
