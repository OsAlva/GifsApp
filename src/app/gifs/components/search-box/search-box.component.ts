import { Component } from '@angular/core';

@Component({
    selector: 'gifs-seach-box',
    // no tendremos un template url porque no son muchas lineas de codigo
    template: `
    <h5>Search</h5>
    <input type="text" class="form-control" placeholder="Search..." />
    <hr>
    `
})

export class SearchBoxComponent {
    constructor() { }


}