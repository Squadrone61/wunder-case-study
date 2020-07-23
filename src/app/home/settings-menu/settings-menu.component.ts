import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ThemeService } from 'src/app/_services/theme.service';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss'],
})
export class SettingsMenuComponent implements OnInit {

  isDarkMode;
  constructor(
    public popoverController: PopoverController,
    private themeService: ThemeService
  ) {
    this.isDarkMode = themeService.getTheme();
  }

  ngOnInit() { }

  toggleDarkTheme() {
    this.themeService.setDarkTheme(this.isDarkMode)
  }

  dismiss() {
    this.popoverController.dismiss();
  }

}
