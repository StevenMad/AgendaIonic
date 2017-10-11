import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import firebase from 'firebase';
import { RegisterPage } from '../register/register';
import { HomeLogged } from '../homeLogged/homeLogged';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myForm: FormGroup;
  // public loginForm: FormGroup;
  // public loading: Loading;
  constructor(public navCtrl: NavController,public formBuilder: FormBuilder
  ){
    this.myForm = formBuilder.group({
      userEmail:[''],
      userPassword:['']
    })
  }

  login()
  {
    var x = firebase.auth().signInWithEmailAndPassword(this.myForm.value['userEmail'],this.myForm.value['userPassword']).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.Message;
    });
    
    if(x)
    {
      this.navCtrl.setRoot(HomeLogged)
    }
  }

  register()
  {
    this.navCtrl.push(RegisterPage,{})
  }
}
