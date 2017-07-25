import { Meta } from './../../data/meta.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-meta',
  templateUrl: 'meta.html',
})
export class MetaPage {

  public meta: Meta;

  constructor(private params: NavParams, public viewCtrl: ViewController) {
    this.meta=this.params.data;
  }

  onClose(remove = false) {
      this.viewCtrl.dismiss(remove);
  }

}

