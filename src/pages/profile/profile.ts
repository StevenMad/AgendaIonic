import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profileImage:any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    var storageRef = firebase.storage().ref();
    var uid = firebase.auth().currentUser.uid;
    var avatarRef = storageRef.child(uid).child('avatar').child('avatar.png');
    if (avatarRef == null)
      this.profileImage = "img/profile.png";
    else
    {
      console.log("on rentre dans le else");
      this.profileImage = this.getProfileImage(avatarRef);
    }
  }

  async getProfileImage(ref)
  {
    return await ref.getDownloadURL();
  }

  email = firebase.auth().currentUser.email;

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }


  file: File;
  getFileName(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
    }
  }

  uploadAvatar() {
    var storageRef = firebase.storage().ref();
    var uid = firebase.auth().currentUser.uid;
    //reference to name ?
    var avatarRef = storageRef.child(uid).child('avatar').child('avatar.png');
    //reference to image
    avatarRef.put(this.file).then(function (snapshot) {
      console.log('upload completed');
    })
  }
}
