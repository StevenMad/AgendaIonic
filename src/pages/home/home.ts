import { Component } from '@angular/core';
import { ToastController, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import firebase from 'firebase';
import { RegisterPage } from '../register/register';
import { FeedPage } from '../feed/feed';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  toastCtrl: any;
  myForm: FormGroup;
  // public loginForm: FormGroup;
  // public loading: Loading;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, toastCtrl: ToastController) {
    this.myForm = formBuilder.group({
      userEmail: [''],
      userPassword: ['']
    })
  }

  login() {
    var x = firebase.auth().signInWithEmailAndPassword(this.myForm.value['userEmail'], this.myForm.value['userPassword']).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.Message;
    });

    if (x) {
      this.navCtrl.setRoot(FeedPage)
    }
    else {
      this.presentToast("Authentication error");
    }
  }

  gLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithRedirect(provider);
    firebase.auth().getRedirectResult().then(function (result) {
      if (result.credential)
        var token = result.credential.accessToken;
      var user = result.user;
      this.navCtrl.setRoot(FeedPage);
    }).catch(function (error) {
      console.log("error with google sign in");
    })
  }

  register() {
    this.navCtrl.push(RegisterPage, {})
  }

  presentToast(message) {
    const toast = this.toastCtrl.create({
      'message': message,
      duration: 2000,
      position: 'bottom'
    })
    toast.onDidDismiss(() => {
      console.log("dismissed");
    })
    toast.present();
  }
}
