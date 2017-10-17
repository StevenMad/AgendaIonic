import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Calendar} from '@ionic-native/calendar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeLogged } from '../pages/homeLogged/homeLogged';
import { RegisterPage } from '../pages/register/register';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    HomeLogged
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    HomeLogged
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Calendar,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
