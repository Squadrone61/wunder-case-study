import { Component, OnInit, OnDestroy } from '@angular/core';
import { ToastController, PopoverController, LoadingController } from '@ionic/angular';
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
  loader: HTMLIonLoadingElement;

  constructor(
    public popoverController: PopoverController,
    private socketService: SocketService,
    private userProv: UserProviderService,
    private router: Router,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.presentLoading().then((el) => {
      this.loader = el;
    })
    this.getUserData()
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getUserData() {
    this.subs = this.socketService
      .getSocketData()
      .subscribe((data: { results: User[] }) => {
        this.closeLoader();
        data.results.forEach(user => {
          this.userList.push(user)
        })
      },
        err => {
          this.closeLoader();
          this.serviceUnavailable()
        })

  }

  toDetails(user: User) {
    this.userProv.selectUser(user);
    this.router.navigate(['/details'])

  }

  async closeLoader() {
    await this.loader.dismiss()
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

  async serviceUnavailable() {
    const toast = await this.toastController.create({
      message: 'Socket service unavailable. Try again later.',
      buttons: [
        {
          side: 'end',
          text: 'Reload',
          handler: () => {
            window.location.reload();
          }
        }
      ]

    });
    toast.present().then((value) => {

    });
  }

  async presentLoading(): Promise<HTMLIonLoadingElement> {
    const loader = await this.loadingController.create({
      spinner: 'circular',
      message: 'Waiting for user data...',
    });
    await loader.present();

    return loader
  }


}
