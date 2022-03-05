import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  id_category:number = 0;

  products: Product[] = [];


  constructor(private activatedRoute:ActivatedRoute, private _productService:ProductService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => { 
        this.id_category = params['id']; 

        this.products = this._productService.getProducts(this.id_category);
    } );
  }

}
