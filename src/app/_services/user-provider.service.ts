import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from '../_model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserProviderService {

  private _selectedUser = new BehaviorSubject<User>(null);

  selectedUser$ = this._selectedUser.asObservable();

  constructor() { }

  selectUser(user: User) {
    this._selectedUser.next(user);
  }
}
