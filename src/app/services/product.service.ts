import { Injectable } from '@angular/core';


@Injectable()
export class ProductService { 

    products:Product[] = [
        {
            nombre: 'Gallo Pinto',
            id: 1,
            id_category: 1,
            detalle: 'Huevos, Queso, Natilla, Platanos Maduros, Pinto con Cafe',
            img: 'assets/img/cat1.jpg',
            precio: 3000
        },{
            nombre: 'Tortilla Aliñada',
            id: 2,
            id_category: 1,
            detalle: 'Tortilla con queso arrollado y natilla',
            img: 'assets/img/cat2.jpg',
            precio: 1000
        },{
            nombre: 'Huevos Rancheros',
            id: 3,
            id_category: 1,
            detalle: 'Huevos en salsa de tomate con un leve picante y tortillas palmeadas',
            img: 'assets/img/cat3.jpg',
            precio: 2000
        },
    ];

    constructor(){
        console.log("Product Service: Servicio listo");
    }


    getProducts(id_category:number) {
        
        let resultProducts:Product[] = [];

        for (let product of this.products){
            if (product.id_category == id_category){
                resultProducts.push(product);
            }
        }

        return resultProducts;
    }
}



//Se crea una interfaz para el manejo de los heroes
export interface Product {
    nombre:string;
    id:number;
    id_category: number;
    detalle:string;
    img: string,
    precio:number
}