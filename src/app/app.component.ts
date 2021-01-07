import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {Router} from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private iconRegistry: MatIconRegistry, private sanitizer : DomSanitizer, private router: Router){
    iconRegistry.addSvgIcon('settings',sanitizer.bypassSecurityTrustResourceUrl('./assets/settings.png'));
    
  }
  public openSettings(){
    this.router.navigate(['/setting']);
  }
  init();
  public init(){
  }
}
