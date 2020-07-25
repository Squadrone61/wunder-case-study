import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';

import { DetailsPage } from './details.page';
import { GMapComponent } from './g-map/g-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { UserAgeComponent } from './user-age/user-age.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapsModule,
    DetailsPageRoutingModule
  ],
  declarations: [
    DetailsPage,
    GMapComponent,
    UserAgeComponent
  ]
})
export class DetailsPageModule { }
