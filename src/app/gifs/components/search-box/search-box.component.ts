import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
    selector: 'gifs-seach-box',
    // no tendremos un template url porque no son muchas lineas de codigo
    template: `
            <h5>Search</h5>
            <input type="text"
            class="form-control" 
            placeholder="Search..."
            (keyup.enter)="searchTag()"
            #txtTagInput
        />
        `
})

// "#txtTagInput" lo que ponemos aqui es conocido como una referencia local y asi se va conocer ese input en todo el tempate 
    //no queremos estar haciendo peticiones http cada vez que el usuario presione una tecla yo solo quiero que cuando presiona enter se dispare el mensaje entonces usamos el (keyup.enter) entonces solo se disparara cuando presione enter
    // el txtTagInput.value ya no necesita mandarse ese valor como parametro porque ya lo tenemos en el tagInput (parte final)

export class SearchBoxComponent {

    @ViewChild('txtTagInput') 
    public tagInput!: ElementRef<HTMLInputElement>;//ViewChild es un decorador que nos permite obtener una referencia local de un elemento html en este caso el input

    constructor() { }

    

    // searchTag( query: string ) {  al hacer lo de arriba ya no necesitamos recibir el query como parametro porque ese elemento de tipo string ya lo tenemos en el tagInput
    searchTag() { //el metodo searchTag recibe un string(newQuery) y lo asigna a la variable query
        const newTag = this.tagInput.nativeElement.value;
        
        console.log({newTag});
        console.log("vfkvkvkf")
    }


}