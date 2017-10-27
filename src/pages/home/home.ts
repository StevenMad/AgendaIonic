import { Component } from '@angular/core';
import { ToastController, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import firebase from 'firebase';
import { RegisterPage } from '../register/register';
import { FeedPage } from '../feed/feed';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  toast:any;
  myForm: FormGroup;
  // public loginForm: FormGroup;
  // public loading: Loading;
  constructor(public navCtrl: NavController, public formBuilder: FormBuilder,public toastCtrl: ToastController,
  public storage: Storage) {

    if(firebase.auth().currentUser!=null)
    {
      this.navCtrl.setRoot(FeedPage);
    }
    this.myForm = formBuilder.group({
      userEmail: [''],
      userPassword: ['']
    })
  }

  login() {
    var scope = this;
    firebase.auth().signInWithEmailAndPassword(this.myForm.value['userEmail'], this.myForm.value['userPassword']).then(function(){
      scope.navCtrl.setRoot(FeedPage);
    }).catch(function (error) {
      scope.presentToast("Authentication error");
      var errorCode = error.code;
      var errorMessage = error.Message;
    });
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
