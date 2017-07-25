import { Ingrediente } from './../model/ingredientes.model';


export class ListaComprasService {

    private itens: Ingrediente[] = [];

    incluiItem(nome: string, quantidade: number) {
        let idx = this.itens.findIndex(item => nome === item.nome);

        if  (idx === -1) {
          this.itens.push(new Ingrediente(nome, quantidade));
        } else {
          this.itens[idx].quantidade = +this.itens[idx].quantidade + +quantidade;
        }
    }

    incluiItens(itens: Ingrediente[]) {
      itens.forEach(itemIngrediente => {
        let idx = this.itens.findIndex(item => itemIngrediente.nome === item.nome);

        if  (idx === -1) {
          this.itens.push(itemIngrediente);
        } else {
          this.itens[idx].quantidade = +this.itens[idx].quantidade + +itemIngrediente.quantidade;
        }

      });

    }

    getItens() {
        return this.itens.slice();
    }

    removeItem(index: number) {
        this.itens.splice(index, 1);
    }

}
