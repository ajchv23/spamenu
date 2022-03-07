import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(private activatedRouter:ActivatedRoute, private _heroesService:HeroesService, private router:Router) { }
  
  criterio:string = '';

  ngOnInit(): void {

    this.activatedRouter.params.subscribe( params => { 
      console.log('search: ' + params['criterio']); 
      this.criterio = params['criterio'];

      this.heroes = this._heroesService.buscarHeroes(this.criterio);
       console.log(this.heroes); 
     });


     
  }

  //Este es el evento que llamo desde el hijo con el output
  verHeroe(idx:number){

    this.router.navigate( ['heroe', idx] );
    console.log(idx);
  }

}
