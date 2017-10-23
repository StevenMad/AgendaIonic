import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import  firebase  from 'firebase';

/**
 * Generated class for the NewEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-event',
  templateUrl: 'new-event.html',
})
export class NewEventPage {

  myForm:FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      eventName:[''],
      eventDescription:[''],
      eventDate:[''],
      eventTime:['']
    })
  }

  save()
  {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var table = firebase.database().ref(uid+'/events');

    //event prop
    var form = this.myForm;
    var name = form.value['eventName'];
    var desc = form.value['eventDescription'];
    var date = form.value['eventDate'];
    var time = form.value['eventTime'];
    table.push({
      "name":name,
      "description":desc,
      "date":date,
      "time":time
    })
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad NewEventPage');
  }

}
