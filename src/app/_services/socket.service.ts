import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  
  constructor(private socket: Socket) { }

  getSocketData() {
    return this.socket
      .fromEvent("userList")
  }
}
