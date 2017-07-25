import { Ingrediente } from './../model/ingredientes.model';
import { Receita } from './../model/receitas.model';

export class ReceitasService {

    private receitas: Receita[] = [];

    adicionaReceita(nome: string, descricao: string, 
                    dificuldade: string, ingredientes: Ingrediente[]) {
        this.receitas.push(new Receita(nome, descricao, dificuldade, ingredientes));

    }

    getReceitas() {
        return this.receitas.slice();
    }

    alteraReceita(index: number, nome: string, descricao: string, 
                    dificuldade: string, ingredientes: Ingrediente[]) {
        this.receitas[index]=new Receita(nome, descricao, dificuldade, ingredientes);
    }

    removeIngrediente(index: number, indexIngrediente:number) {
        this.receitas[index].ingredientes.splice(indexIngrediente,1);
    }

    removeReceita(index: number) {
        this.receitas.splice(index, 1);
    }

}


