import { Injectable } from '@angular/core';


@Injectable()
export class CategoryService { 

    categorys:Category[] = [
        {
            nombre: 'Desayunos',
            id: 1,
            detalle: '',
            img: 'assets/img/cat1.jpg'
        },{
            nombre: 'Ensaladas',
            id: 2,
            detalle: '',
            img: 'assets/img/cat2.jpg'
        },{
            nombre: 'Bebidas',
            id: 3,
            detalle: '',
            img: 'assets/img/cat3.jpg'
        },
    ];

    constructor(){
        console.log("Category Service: Servicio listo");
    }
}



//Se crea una interfaz para el manejo de los heroes
export interface Category {
    nombre:string;
    id:number;
    detalle:string;    
    img: string
}