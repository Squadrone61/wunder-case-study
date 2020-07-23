import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastController, PopoverController } from '@ionic/angular';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { Observable, Subscription } from 'rxjs';
import { SocketService } from '../_services/socket.service';
import { User } from '../_model/User.model';
import { UserProviderService } from '../_services/user-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  userList: Array<User> = [];
  subs: Subscription;

  constructor(
    public popoverController: PopoverController,
    private socketService: SocketService,
    private userProv: UserProviderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subs = this.socketService
      .getSocketData()
      .subscribe((data: { results: User[] }) => {
        data.results.forEach(user => {
          this.userList.push(user)
        })
      })

  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  toDetails(user: User) {
    this.userProv.selectUser(user);
    this.router.navigate(['/details'])

  }

 

  async settingsMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: SettingsMenuComponent,
      animated: true,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


}
