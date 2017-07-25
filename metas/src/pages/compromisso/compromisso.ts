import { MetaPage } from './../meta/meta';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Meta } from "../../data/meta.interface";
import { MetasService } from "../../services/metas";

@IonicPage()
@Component({
  selector: 'page-compromisso',
  templateUrl: 'compromisso.html',
})
export class CompromissoPage {

  metas: Meta[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private metaService: MetasService, private modalCtrl: ModalController) {

  }

  ionViewWillEnter() {
    this.metas=this.metaService.getMetasSelecionadas();
  }

  onViewMeta(meta: Meta) {
    const modal = this.modalCtrl.create(MetaPage, meta);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if (remove) {
        this.metaService.removeSelecaoMeta(meta);
        this.metas=this.metaService.getMetasSelecionadas();
      }
    });
  }

}
