import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgCalendarModule  } from 'ionic2-calendar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeLogged } from '../pages/homeLogged/homeLogged';
import { RegisterPage } from '../pages/register/register';
import { FeedPage } from '../pages/feed/feed';
import { NewEventPage } from '../pages/new-event/new-event';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    HomeLogged,
    FeedPage,
    NewEventPage
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    HomeLogged,
    FeedPage,
    NewEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
