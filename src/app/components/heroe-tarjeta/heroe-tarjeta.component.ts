import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number = 0;

  //Se declara el output para enviar el index del heroe que se esta seleccionando hacia la funcion verHeroe, pero del padre.
  @Output() heroeSeleccionado:EventEmitter<number>;

  constructor(private router:Router) { 

    this.heroeSeleccionado = new EventEmitter(); 
  }

  ngOnInit(): void {
  }

  verHeroe(index:number){
    //this.router.navigate(['/heroe', index]);

    this.heroeSeleccionado.emit(this.index);
  }

}
