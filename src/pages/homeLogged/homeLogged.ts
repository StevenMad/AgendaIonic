import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-homeLogged',
  templateUrl: 'homeLogged.html'
})
export class HomeLogged {

  constructor(public navCtrl: NavController, private calendar:Calendar) {
    if(!this.calendar.hasReadWritePermission())
    {
      this.calendar.requestReadWritePermission();
    }
    this.calendar.createCalendar('MyCalendar').then(
      (msg)=>{console.log(msg);},
      (err)=>{console.log(err);}
    )
  }

  listCalendars()
  {
    this.calendar.listCalendars().then(
       (msg)=>{return "Hello world";},
       (err)=>{return "yeah bro";}
    );
    return "hello world";
  }

  logEvent(event)
  {
    this.calendar.createCalendar('MyCalendar').then(
      (msg)=>{console.log(msg);},
      (err)=>{console.log(err);}
    )
    console.log("Hello done");
  }

}
