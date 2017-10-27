import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { FeedPage } from '../feed/feed';

/**
 * Generated class for the PreferencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preference',
  templateUrl: 'preference.html',
})
export class PreferencePage {

  friendsArray=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.friendsArray = this.chargerPref();
  }

  chargerPref()
  {
    var i = 0;
    var friends = [];
    var uid = firebase.auth().currentUser.uid;
    var queryShared = firebase.database().ref(uid+'/sharingTo').orderByKey();
    queryShared.once('value').then(function(snapshot){
      snapshot.forEach(function(childSnapshot){
        var childData = childSnapshot.val();
        friends[i] = childData;
        i++;
      })
    })
    return friends;
  }

  updatePref(ami)
  {
    var uid = firebase.auth().currentUser.uid;
    var queryShared = firebase.database().ref(uid+'/sharingTo').orderByKey();
    queryShared.once('value').then(function(snapshot){
      snapshot.forEach(function(childSnapshot){
        var key = childSnapshot.key;
        var childData = childSnapshot.val();
        if(childData['uid']==ami.uid)
        {
          var table = firebase.database().ref(uid+'/sharingTo/'+key);
          var updates = {};
          updates['uid']=ami.uid;
          updates['name']=ami.name;
          updates['show']=!ami.show;
          table.update(updates);
        }
      })
    })
  }

valider()
{
  this.navCtrl.setRoot(FeedPage);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferencePage');
  }

}
