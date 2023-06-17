import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'}) //lo proveemos en el root porque lo vamos a usar en toda la aplicacion sera global
export class GifsService { // este servicio estara disponible en toda la aplicacion y si no le ponemos provideIn: 'root' tendriamos que importarlo en el app.module.ts en el apartado de providers: [] y asi estaria disponible en toda la aplicacion
    
    public gifList: Gif[] = []; //importante local storage solo guarda strings por eso tenemos que convertir el arreglo de gifs a un string con JSON.stringify

    private _tagHistory: string[] = []; //importante para local storage solo guarda strings por eso tenemos que convertir el arreglo de gifs a un string con JSON.stringify
    private apiKey: string = 'cjA1jDuKfSW2QB3VCrV7lEUdbXYJMhi8'
    private url: string= `https://api.giphy.com/v1/gifs`;

    constructor(private http: HttpClient) { } //inyectamos el servicio httpclient
    
    get tagHistory() {
        return [...this._tagHistory];
    }   

    private organizedHistory( tag: string ) {//este metodo es para que no se repitan los tags
        tag = tag.toLowerCase();
        if(this._tagHistory.includes(tag)) { //si el tag ya existe en el arreglo
            this._tagHistory = this._tagHistory.filter( oldTag => oldTag !== tag ); //el filter regresa un nuevo arreglo con los elementos que cumplan la condicion menos los que duplicados 
        }

        this._tagHistory.unshift( tag ); //unshift agrega un elemento al inicio del arreglo
        this._tagHistory = this._tagHistory.splice(0,10); //splice corta el arreglo desde el elemento 0 hasta el 10 limitamos el arreglo a 10 elementos para que  el usuario no pueda agregsar indiscriminadamente
        this.saveLocalStorage();

    }


    private saveLocalStorage():void { //este metodo es para guardar en el local storage
        localStorage.setItem('history', JSON.stringify(this._tagHistory)); //el local storage solo guarda strings por eso tenemos que convertir el arreglo de gifs a un string con JSON.stringify

    }

    searchTag( tag: string ):void { //el metodo searchTag recibe un string(newQuery) y lo asigna a la variable query
        //validaciones
        if( tag.length === 0 ) return; //si el tag esta vacio no hagas nada
       this.organizedHistory( tag );

    //    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`)
    //      .then( resp => resp.json() )
    //         .then( data => {
    //             console.log(data);
    //         })

        //con el httpClient de angular
        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('limit', '10')
            .set('q', tag);


        this.http.get<SearchResponse>(`${this.url}/search?${params}`).subscribe( (resp) => {   //esto es un observable, al suscribirnos estaremos escuchando la respuesta del servicio
        

            this.gifList = resp.data;
            // console.log({gifs: this.gifList})
        })

        



        // this._tagHistory.unshift( tag ); //unshift agrega un elemento al inicio del arreglo

        // console.log(this._tagHistory);
    }



}