import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../services/category.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

  @Input() category:any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
