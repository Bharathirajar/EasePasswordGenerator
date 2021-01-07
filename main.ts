import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


let onDeviceReady = () => {
  if (environment.production) {
    enableProdMode();
  }
  
  platformBrowserDynamic().bootstrapModule(AppModule);
}
onDeviceReady();

/*if(window['cordova']){
  document.addEventListener("deviceready",() => onDeviceReady(), false);
} else {
  onDeviceReady();
}*/


