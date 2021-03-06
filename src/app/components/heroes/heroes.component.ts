import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService: HeroesService, private router: Router) {

    console.log("constructor ");
   }

  ngOnInit(): void {
    console.log("on Init ");
    this.heroes = this._heroesService.getHerores();

    console.log(this.heroes);
  }
  
  //Este es el evento que llamo desde el hijo con el output
  verHeroe(idx:number){

    this.router.navigate( ['heroe', idx] );
    console.log(idx);
  }

  devolverHeroe(idx:number){
    this._heroesService.getHeroe(idx);
  }

}
