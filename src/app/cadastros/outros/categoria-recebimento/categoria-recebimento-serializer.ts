import {Categoria} from '../../../core/model';

export class CategoriaRecebimentoSerializer {
  fromJson(json: any): Categoria {
    const categoria = new Categoria();
    categoria.id = json.id;
    categoria.descricao = json.descricao;

    return categoria;
  }

  toJson(categoria: Categoria): any {
    return {
      id: categoria.id,
      descricao: categoria.descricao
    };
  }
}
