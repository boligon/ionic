import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from "angularfire2";
import { ChatPage } from '../pages/chat/chat';

import { AuthService } from './../services/auth-service';
import { LoginPage } from './../pages/login/login';
import { ResetarPasswordPage } from './../pages/resetarpassword/resetarpassword';
import { CriarContaPage } from './../pages/criarconta/criarconta';

export const firebaseConfig = {

    apiKey: "AIzaSyAGO8QLjWBsE4Mj5ETM140R-1Q-HrbOMdY",
    authDomain: "chat-ionic-ffe01.firebaseapp.com",
    databaseURL: "https://chat-ionic-ffe01.firebaseio.com",
    projectId: "chat-ionic-ffe01",
    storageBucket: "chat-ionic-ffe01.appspot.com",
    messagingSenderId: "374995984248"

};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    LoginPage,
    CriarContaPage,
    ResetarPasswordPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    LoginPage,
    CriarContaPage,
    ResetarPasswordPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}



