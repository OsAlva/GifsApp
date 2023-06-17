import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'}) //lo proveemos en el root porque lo vamos a usar en toda la aplicacion sera global
export class GifsService { // este servicio estara disponible en toda la aplicacion y si no le ponemos provideIn: 'root' tendriamos que importarlo en el app.module.ts en el apartado de providers: [] y asi estaria disponible en toda la aplicacion
    private _tagHistory: string[] = [];

    constructor() { }
    
    get tagHistory() {
        return [...this._tagHistory];
    }   

    searchTag( tag: string ):void { //el metodo searchTag recibe un string(newQuery) y lo asigna a la variable query
        
        this._tagHistory.unshift( tag ); //unshift agrega un elemento al inicio del arreglo

        console.log(this._tagHistory);
    }



}