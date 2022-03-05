import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(private router:ActivatedRoute, private _heroesService:HeroesService) { }
  
  criterio:string = '';

  ngOnInit(): void {

    this.router.params.subscribe( params => { 
      console.log('search: ' + params['criterio']); 
      this.criterio = params['criterio'];

      this.heroes = this._heroesService.buscarHeroes(this.criterio);
       console.log(this.heroes); 
     });


     
  }

  verHeroe(idx:number){

  }

}
