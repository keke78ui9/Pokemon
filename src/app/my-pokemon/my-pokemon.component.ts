import { Component, OnInit } from '@angular/core';

import {NewsDataService} from '../dataServices/news-data-service.service';
import {Observable} from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-my-pokemon',
  templateUrl: 'my-pokemon.component.html',
  styleUrls: ['my-pokemon.component.css'],
  providers: [NewsDataService]
})
export class MyPokemonComponent implements OnInit {
  nameList$: Observable<any[]>;

  constructor(private pNameSvc: NewsDataService) {}

  ngOnInit() {
    this.nameList$ = this.pNameSvc.getData();
  }


}
