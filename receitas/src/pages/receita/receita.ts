
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';

import { EditaReceitaPage } from "../edita-receita/edita-receita";
import { Receita } from './../../model/receitas.model';

import { ListaComprasService } from './../../services/ingrediente';
import { ReceitasService } from "../../services/receitas";

@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html'
})
export class ReceitaPage implements OnInit {

  receita: Receita;
  index: number;
  actionSheet;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private listaComprasService: ListaComprasService,
              private receitasService: ReceitasService,
              private actionSheetController: ActionSheetController,
              private toastController: ToastController) {}

  ngOnInit(): void {
      this.receita=this.navParams.get('receita');
      this.index=this.navParams.get('index');
  }

  alteraReceita() {
    this.navCtrl.push(EditaReceitaPage, {mode: 'Altera', receita: this.receita, index: this.index})
  }

  removeReceita() {
  this.actionSheet = this.actionSheetController.create({
      title: 'Deseja realmente remover a receita?',
      buttons: [
        {
          text: 'Confirma',
          role: '',
          handler: () => {
            this.receitasService.removeReceita(this.index);
            this.navCtrl.popToRoot();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });
    this.actionSheet.present();


  }

  removeIngrediente(index: number) {
    this.receitasService.removeIngrediente(this.index, index);
  }

  adicionaIngredientes() {
    this.listaComprasService.incluiItens(this.receita.ingredientes);
    const toast = this.toastController.create({
        message: 'Ingredientes foram adicionados a lista de compras com sucesso.',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
  }

}
