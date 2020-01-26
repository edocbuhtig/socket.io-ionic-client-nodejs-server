import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as io from 'socket.io-client';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  text_input: any;
  server_response: any;
  server_add: any;
  socket:any;

  constructor(public navCtrl: NavController) {

  }

  connect(){
    this.socket = io(this.server_add);
    this.Receive();
  }

  send(msg) {
    if(msg!='') {
     this.socket.emit('message', msg);
    }
    this.text_input='';
  }

  Receive(){
    this.socket.on('message', (msg) => {
      console.log("msg obje>>>"+ msg);
      this.server_response = msg;
     
    });
 }

}
