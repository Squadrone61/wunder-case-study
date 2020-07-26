import { NgModule } from '@angular/core';
import { DetailsPageRoutingModule } from './details-routing.module';
import { DetailsPage } from './details.page';
import { GMapComponent } from './g-map/g-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { UserAgeComponent } from './user-age/user-age.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    SharedModule,
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
