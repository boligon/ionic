import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Meta } from "../../data/meta.interface";
import { MetasService } from "../../services/metas";


@IonicPage()
@Component({
  selector: 'page-metas',
  templateUrl: 'metas.html',
})
export class MetasPage implements OnInit{

  categoriaMetas: { categoria: string, metas: Meta[], icon: string };

  constructor(private navParams: NavParams, private alertCtrl: AlertController, private metasService: MetasService) {

  }

  ngOnInit() {
    this.categoriaMetas = this.navParams.data;
  }


  onSeleciona(meta: Meta) {

    let msg: string = 'Tem certeza que quer selecionar essa meta do ' + meta.autor + '?';

    const alert = this.alertCtrl.create({
      title: 'Seleciona Meta',
      subTitle: 'Confirmação',
      message: msg,
      buttons: [{
        text: "Sim",
        handler: () => {
          this.metasService.selecionaMeta(meta);
        }
      },
      {
        text: "Não",
        role: "cancel",
        handler: () => {
          console.log("Não");
        }
      }]
    });

    alert.present();
  }

}
