import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/httpClient';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//import generatePassword = require('password-generator');
//import generator = require('generate-password');
//var randomize = require('randomatic');

import {CommonDataStoreService} from '../app/common-data-store.service'
@Injectable({
  providedIn: 'root',
})
export class CommonserviceService {





 /* public headers: HttpHeaders = new HttpHeaders();
  headers = this.headers.append('Accept', 'application/json');
  headers.append('Access-Control-Allow-Origin', '*');*/

  private httpOptions = {
    headers: new HttpHeaders({'Access-Control-Allow-Origin':'*'})
  };

  constructor(private http: HttpClient, private commonDataStoreService : CommonDataStoreService) { }

  getPlainPassword(characterCount : number): string{
    //return generator.generate({length: 10,numbers: true});
    //return randomize('*', this.commonDataStoreService.getCharacterCount(), {chars: this.commonDataStoreService.getSpecificCharacters()});
    //return "";
  }

  httpGet() : void{
    this.http.get("https://jira.dt.renault.com/rest/agile/1.0/board/319/sprint", this.httpOptions).subscribe((data : any)=> console.log("json "+data));
  }
}
