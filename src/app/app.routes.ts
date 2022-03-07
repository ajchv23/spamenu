import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ErrorPageComponent } from "./components/error-page/error-page.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { CategoryComponent } from './components/category/category.component';


const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'notfound', component: ErrorPageComponent},
    {path: 'heroes', component: HeroesComponent },
    {path: 'heroe/:id', component: HeroeComponent },
    {path: 'search/:criterio', component: SearchComponent },
    {path: 'category/:id', component: CategoryComponent },
    {path: '**', pathMatch: 'full', redirectTo: '/notfound' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: false});
