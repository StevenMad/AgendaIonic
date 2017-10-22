import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-homeLogged',
  templateUrl: 'homeLogged.html'
})
export class HomeLogged {

  eventSource;
  viewTitle;
  isToday: boolean;
  calendar = {
      mode: 'day',
      currentDate: new Date()
  }; 
  constructor(public navCtrl: NavController) {}
  
  onEventSelected(event)
  {

  }

  onViewTitleChanged(event)
  {

  }

  onTimeSelected(event)
  {

  }

}
