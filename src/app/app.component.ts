import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { HomeLogged } from '../pages/homeLogged/homeLogged';
import { RegisterPage } from '../pages/register/register';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any=HomePage;
  pages: Array<{title: string, component: any}>;
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


    // const unsuscribe = firebase.auth().onAuthStateChanged(user=>{
    //   if(!user)
    //   {
    //     this.rootPage = HomePage;
    //     unsuscribe();
    //   }
    //   else{
    //     this.rootPage = 'HomeLogged';
    //   }
    // })
  }
}

