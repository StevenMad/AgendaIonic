import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NgCalendarModule  } from 'ionic2-calendar';
import { SocialSharing } from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeLogged } from '../pages/homeLogged/homeLogged';
import { RegisterPage } from '../pages/register/register';
import { FeedPage } from '../pages/feed/feed';
import { NewEventPage } from '../pages/new-event/new-event';
import { ProfilePage } from '../pages/profile/profile';
import { PreferencePage } from '../pages/preference/preference';
import { SharePage } from '../pages/share/share';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    HomeLogged,
    FeedPage,
    NewEventPage,
    ProfilePage,
    PreferencePage,
    SharePage
  ],
  imports: [
    BrowserModule,
    NgCalendarModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    HomeLogged,
    FeedPage,
    NewEventPage,
    ProfilePage,
    PreferencePage,
    SharePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
