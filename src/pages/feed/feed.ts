import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewEventPage } from '../new-event/new-event';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  events = [
    {
      "title":"Bienvenue",
      "content":"Accueil Bienvenue aux nouveaux arrivants",
      "date":"19-12-2017",
      "public":"true"
    },
    {
      "title":"Bienvenue",
      "content":"Accueil Bienvenue aux nouveaux arrivants",
      "date":"19-12-2017",
      "public":"true"
    },
    {
      "title":"Bienvenue",
      "content":"Accueil Bienvenue aux nouveaux arrivants",
      "date":"19-12-2017",
      "public":"true"
    },
    {
      "title":"Bienvenue",
      "content":"Accueil Bienvenue aux nouveaux arrivants",
      "date":"19-12-2017",
      "public":"true"
    },
    {
      "title":"Bienvenue",
      "content":"Accueil Bienvenue aux nouveaux arrivants",
      "date":"19-12-2017",
      "public":"true"
    },
    {
      "title":"Bienvenue",
      "content":"Accueil Bienvenue aux nouveaux arrivants",
      "date":"19-12-2017",
      "public":"true"
    },
    {
      "title":"Rammasage ordures",
      "content":"Passage poubelle bleue",
      "date":"16-10-2017",
      "public":"true"
    }

  ];

  addEvent()
  {
    this.navCtrl.push(NewEventPage,{})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
