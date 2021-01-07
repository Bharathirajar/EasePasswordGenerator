import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonserviceService } from './commonservice.service';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';


import {FormsModule} from '@angular/forms/';
import {MatIconModule} from '@angular/material/icon';
import { SettingsComponent } from './settings/settings.component';
import { AppRouterModule } from './app-router/app-router.module';
import {CommonDataStoreService} from './common-data-store.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    AppRouterModule,
    BrowserAnimationsModule
    ],
  providers: [{provide : CommonserviceService},{provide : CommonDataStoreService}],
  bootstrap: [AppComponent],
  exports: [
  ]
})



export class AppModule {
  constructor(){
    
  }
}
