import { ReceitaPage } from './../pages/receita/receita';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from './../pages/tabs/tabs';
import { ListaComprasPage } from './../pages/lista-compras/lista-compras';
import { ReceitasPage } from './../pages/receitas/receitas';
import { EditaReceitaPage } from './../pages/edita-receita/edita-receita';

import { ListaComprasService } from './../services/ingrediente';
import { ReceitasService } from './../services/receitas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ReceitasPage,
    ReceitaPage,
    ListaComprasPage,
    EditaReceitaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ReceitasPage,
    ListaComprasPage,
    EditaReceitaPage,
    ReceitaPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaComprasService,
    ReceitasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
