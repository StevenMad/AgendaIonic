import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  selectedItem: any;
  icons:string[];
  items: Array<{title:string, note: string, icon:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem=navParams.get('item');
    this.icons = ['flask','wifi','beer','football','basketball','paper-plane','boat'];
    this.items = [];
    for(let i = 1; i < 8;i++){
      this.items.push({
        title:'Item'+i,
        note:'This is item #'+i,
        icon:this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  // itemTapped(event, item) {
  //   this.navCtrl.push(ItemDetailsPage, {
  //     item:item;
  //   })
  // }

}
