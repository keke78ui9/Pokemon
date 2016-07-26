import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import {MyPokemonComponent} from './my-pokemon/my-pokemon.component';


@Component({
  moduleId: module.id,
  selector: 'news-app2-app',
  templateUrl: 'news-app2.component.html',
  styleUrls: ['news-app2.component.css'],
  directives: [ROUTER_DIRECTIVES, MyPokemonComponent]
})

export class NewsApp2AppComponent {
  title = 'Pokemon';
  constructor() {} 
}
