import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule} from '@angular/router';
import { SettingsComponent } from '../settings/settings.component';
import { AppHomeComponent } from '../app-home/app-home.component';

const appRoute : Routes = [{
  path: '',
  component: AppHomeComponent
},{
  path : 'setting',
  component : SettingsComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})


export class AppRouterModule { }
