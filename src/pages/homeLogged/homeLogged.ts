import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Firebase } from '@ionic-native/firebase';
import firebase from 'firebase';

@Component({
  selector: 'page-homeLogged',
  templateUrl: 'homeLogged.html'
})
export class HomeLogged {

  constructor(public navCtrl: NavController) {

  }

  logEvent(event)
  {
    console.log();
  }

}
