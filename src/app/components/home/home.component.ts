import { Component, OnInit } from '@angular/core';
import { CategoryService, Category } from '../../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categorys:Category[] = [];

  constructor(private _categoryService:CategoryService) { }

  ngOnInit(): void {

    this.categorys = this._categoryService.categorys;
  }

}
