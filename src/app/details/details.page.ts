import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserProviderService } from '../_services/user-provider.service';
import { User } from '../_model/User.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, OnDestroy {

  user: User;
  subs: Subscription;
  constructor(
    private userProv: UserProviderService,
    private router: Router
  ) {
    this.subs = userProv.selectedUser$.subscribe(selected => {
      if (selected) {
        this.user = selected;

      } else {
        this.router.navigateByUrl('/')
      }
    })
  }

  ngOnInit() {
    console.log('detailsUser', this.user)
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
