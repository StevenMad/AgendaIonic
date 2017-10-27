import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { FeedPage } from '../pages/feed/feed';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any=HomePage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    firebase.initializeApp({
      apiKey: "AIzaSyApLm0Ll5o51LRo0bOWqw0-V297vCB61sk",
      authDomain: "mysharedagenda-91d48.firebaseapp.com",
      databaseURL: "https://mysharedagenda-91d48.firebaseio.com",
      projectId: "mysharedagenda-91d48",
      storageBucket: "mysharedagenda-91d48.appspot.com",
      messagingSenderId: "327893341943"
    });


  }
}

