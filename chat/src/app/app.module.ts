import { AngularFireDatabase } from 'angularfire2/database';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from "angularfire2";
import { ChatPage } from '../pages/chat/chat';

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
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}



