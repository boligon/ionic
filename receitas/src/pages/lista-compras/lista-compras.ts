
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { ListaComprasService } from './../../services/ingrediente';
import { Ingrediente } from './../../model/ingredientes.model';


@Component({
  selector: 'page-lista-compras',
  templateUrl: 'lista-compras.html'
})
export class ListaComprasPage {

  listaItens : Ingrediente[] = [];

  constructor(private listaComprasService:ListaComprasService) {}


  incluiItem(form: NgForm) {
    this.listaComprasService.incluiItem(form.value.nomeIngrediente, form.value.qtdeIngrediente);
    form.reset();
    this.carregaItens();
  }

  ionViewWillEnter() {
    this.carregaItens();
  }

  carregaItens() {
    this.listaItens=this.listaComprasService.getItens();
  }

 removeItem(index: number) {
    this.listaComprasService.removeItem(index);
    this.carregaItens();
  }


}


