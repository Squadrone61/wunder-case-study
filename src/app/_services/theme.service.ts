import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _isdarkTheme = false;

  constructor() { }

  public setDarkTheme(isDark: boolean) {
    if (isDark === this._isdarkTheme) {
      return;
    }
    this._isdarkTheme = isDark;
    document.body.classList.toggle('dark', this._isdarkTheme);
  }

  public getTheme() {
    return this._isdarkTheme
  }

}
