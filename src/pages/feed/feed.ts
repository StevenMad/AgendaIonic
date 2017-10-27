import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  firebase  from 'firebase';
import { NewEventPage } from '../new-event/new-event';
import { ProfilePage } from '../profile/profile';
import { SharePage } from '../share/share';
import { HomePage } from '../home/home';
import { PreferencePage } from '../preference/preference';

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
    var i=0;
    var eventsArray = [];
    var user = firebase.auth().currentUser;
    if(user==null)
      navCtrl.setRoot(HomePage);
    var uid = user.uid;
    var query = firebase.database().ref(uid+'/events').orderByChild('date');
    var queryShared = firebase.database().ref(uid+'/sharingTo').orderByKey();
    queryShared.once('value').then(function(snapshot){
      snapshot.forEach(function(childSnapshot){
        var childData = childSnapshot.val();
        if(childData['show'])
        {
          var queryChild = firebase.database().ref(childData['uid']+'/events').orderByChild('date');
          queryChild.once('value').then(function(snapshot){
            snapshot.forEach(function(childSnapshot){
              var childData = childSnapshot.val();
              eventsArray[i] = childData;
              i++;  
            })
          })  
        }
      })
    })       
    query.once('value').then(function(snapshot){
        snapshot.forEach(function(childSnapshot){
          var childData = childSnapshot.val();
          eventsArray[i] = childData;
          i++;
        })
        eventsArray = eventsArray.reverse();
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
      case "Logout":{firebase.auth().signOut();this.navCtrl.setRoot(HomePage);break}
      case "PreferencePage":{this.navCtrl.push(PreferencePage);break}
    }    
  }


}
