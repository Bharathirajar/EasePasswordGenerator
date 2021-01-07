import { Component, OnInit, Input } from '@angular/core';
import {CommonserviceService} from '../commonservice.service';
import {CommonDataStoreService} from '../common-data-store.service'

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  plainPassword : string;
  characterCount : number;

  constructor(private commonservice: CommonserviceService, private commonDataStoreService: CommonDataStoreService) { }

  ngOnInit() {
    this.characterCount = 8;
  }

  quickPasswordClick() : void{
    this.plainPassword = this.commonservice.getPlainPassword(this.commonDataStoreService.getCharacterCount());
    //this.commonservice.httpGet();
  }

}
