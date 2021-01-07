import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonDataStoreService {
  
  private characterCount : number = 8;
  private specificCharacters : string;

  constructor() { }

  public setCharacterCount(count : number){
    this.characterCount = count;
  }

  public getCharacterCount(){
    return this.characterCount;
  }

  public setSpecificCharacters(specificCharacters : string){
    this.specificCharacters = specificCharacters;
  }

  public getSpecificCharacters(){
    return this.specificCharacters;
  }
}
