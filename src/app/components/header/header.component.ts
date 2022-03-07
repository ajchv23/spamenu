import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  backButton:boolean = false;

  constructor(private _heroesService:HeroesService, private router:Router) { }

  ngOnInit(): void {
  }


  buscarTexto(criterio:string){
    //console.log (texto);
    //this._heroesService.buscarHeroes(texto);
    this.router.navigate(['/search', criterio]);

  }

}
