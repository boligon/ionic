import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Camera } from "@ionic-native/camera";


class CameraMock extends Camera {
  getPicture(options) {
    return new Promise((resolve, reject) => {
      resolve("https://3.bp.blogspot.com/-guGeeGCc29Q/VzN7Vg_JAHI/AAAAAAABqQM/ZrPkwAaE1vscf9uc0wZ_XINHkiicxc2lgCLcB/s1600/imagens-para-alegrar-o-seu-dia-109.gif");
    })
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: Camera, useClass: CameraMock },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

