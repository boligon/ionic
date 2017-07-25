import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LugarPage } from './../pages/lugar/lugar';
import { AdicionaLugarPage } from './../pages/adiciona-lugar/adiciona-lugar';
import { ObtemLocalizacaoPage } from './../pages/obtem-localizacao/obtem-localizacao';

import { AgmCoreModule } from "angular2-google-maps/core";

import { Geolocation} from "@ionic-native/geolocation";
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from "@ionic-native/camera";
import { LugaresService } from './../services/lugares';
import { File} from "@ionic-native/file";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdicionaLugarPage,
    LugarPage,
    ObtemLocalizacaoPage
  ],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD3vkNqE-MGA285D6BwCW45argSWFpGxuc'
    }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdicionaLugarPage,
    LugarPage,
    ObtemLocalizacaoPage
  ],
  providers: [
    LugaresService,
    StatusBar,
    SplashScreen,
    Geolocation,
    File,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
