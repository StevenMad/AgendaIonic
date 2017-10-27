import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { FeedPage } from '../feed/feed';

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  uidShare:string;
  myForm: FormGroup;
  tokenForm : FormGroup;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public socialSharing:SocialSharing, public formBuilder:FormBuilder,
    public toastCtrl: ToastController) {
    this.uidShare = firebase.auth().currentUser.uid;
    this.myForm = formBuilder.group({
      userEmail:['']
    })
    this.tokenForm = formBuilder.group({
      userToken:[''],
      userName:['']
    })
  }

  share(){
    var scope = this;
    this.socialSharing.canShareViaEmail().then(()=>{
      var message = "Please paste this token in the application to accept the sharing demand from "+firebase.auth().currentUser.email;
      var email = this.myForm.value['userEmail'];
      this.socialSharing.shareViaEmail('Test sharing to myself',message,[email]).then(()=>{
        scope.presentToast("The email was sent");
      }).catch(()=>{
        scope.presentToast("An error occured");
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }

  submitToken()
  {
    var user = firebase.auth().currentUser;
    var uid = user.uid;
    var tokenId = this.tokenForm.value['userToken'];
    var username = this.tokenForm.value['userName'];
    var table = firebase.database().ref(uid+'/sharingTo');
    table.push({uid:tokenId,name:username,show:true});
    this.presentToast("token added");
    this.navCtrl.setRoot(FeedPage);
  }

  presentToast(message)
  {
    const toast = this.toastCtrl.create({
      'message':message,
      duration:2000,
      position:'bottom'
    })
    toast.onDidDismiss(()=>{
      console.log("dismissed");
    })    
    toast.present();
  }

}
