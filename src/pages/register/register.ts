import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import firebase from 'firebase';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  //global var
  myForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      userEmail:[''],
      userPassword:[''],
      confirmPassword:['']
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register()
  {
    console.log(firebase.auth().createUserWithEmailAndPassword(this.myForm.value['userEmail'],this.myForm.value['userPassword']));
  }

}
