import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  firebase  from 'firebase';
import { NewEventPage } from '../new-event/new-event';
import { ProfilePage } from '../profile/profile';
import { SharePage } from '../share/share';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  events = [];
  title='test';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var query = firebase.database().ref(uid+'/events').orderByKey();
    var i=0;
    var eventsArray = [];
    query.once('value').then(function(snapshot){
        snapshot.forEach(function(childSnapshot){
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          eventsArray[i] = childData;
          i++;
        })
      })
    this.events = eventsArray;    
  }

  addEvent()
  {
    this.navCtrl.push(NewEventPage,{})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }
  
  doClick(page)
  {
    console.log(page);
    switch(page)
    {
      case "ProfilePage":this.navCtrl.push(ProfilePage,{});break;
      case "SharePage":this.navCtrl.push(SharePage,{});break;
    }    
  }


}
