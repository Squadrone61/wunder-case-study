import { NgModule } from '@angular/core';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    SharedModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    SettingsMenuComponent]
})
export class HomePageModule { }
