import { ViewController } from 'ionic-angular';
import { Localizacao } from './../../models/localizacao';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Lugar } from './../../models/lugar';

/**
 * Generated class for the LugarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {

  lugar: Lugar;  

  constructor(public navCtrl: NavController, public navParams: NavParams,  private viewCtrl: ViewController) {
    this.lugar = navParams.get('lugar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
  }

 cancela() {
    this.viewCtrl.dismiss();
  }
  
}
