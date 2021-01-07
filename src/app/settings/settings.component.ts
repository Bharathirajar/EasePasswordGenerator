import { Component, OnInit } from '@angular/core';
import {CommonDataStoreService} from '../common-data-store.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  private characterCount : number;
  private specificCharacters : string;

  constructor(private commonDataStoreService : CommonDataStoreService) { }

  ngOnInit() {
  }

  public save(){
    this.commonDataStoreService.setCharacterCount(this.characterCount);
    this.commonDataStoreService.setSpecificCharacters(this.specificCharacters);

  }

}
