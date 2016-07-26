import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {PokemonModel} from './PokemonModel';

@Injectable()
export class NewsDataService {

  constructor(private http: Http) {}


  getData(): Observable<PokemonModel[]> {
    return this.http.get('./app/dataServices/p-name-list.json')
    .do((d: Response) => console.log("raw data " + d))
    .map((res: Response) => res.json())
    .do((d: PokemonModel) => console.log('processed data', d));
  }

  getOneData(id: PokemonModel) : Observable<any> {
    return this.http.get('./app/dataServices/p-name-list.json')
      .map(res => res.json())
      .map((list: Array<any>) =>{
        let result: PokemonModel = new PokemonModel();
        if (list) {
          list.forEach(element => {
            //            console.info(element);
            if (element.Id === id) {
              console.info("find the one " + element.Id);
              result = element;
            }
          });
          return result;
        }
      })
  }
}
