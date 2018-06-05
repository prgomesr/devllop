import {Fornecedor} from '../../core/model';

export class FornecedorSerializer {
  fromJson(json: any): Fornecedor {
    const fornecedor = new Fornecedor();
    fornecedor.id = json.id;
    fornecedor.cnpj = json.cnpj;
    fornecedor.fantasia = json.fantasia;
    fornecedor.razaoSocial = json.razaoSocial;
    fornecedor.email = json.email;
    fornecedor.contato = json.contato;
    fornecedor.observacao = json.observacao;
    fornecedor.telefonePrincipal = json.telefonePrincipal;
    fornecedor.telefoneSecundario = json.telefoneSecundario;
    fornecedor.inscEstadual = json.inscEstadual;
    fornecedor.inscMunicipal = json.inscMunicipal;
    fornecedor.isento = json.isento;
    fornecedor.endereco = json.endereco;

    return fornecedor;
  }

  toJson(fornecedor: Fornecedor): any {
    return {
      id: fornecedor.id,
      cnpj: fornecedor.cnpj,
      fantasia: fornecedor.fantasia,
      razaoSocial: fornecedor.razaoSocial,
      email: fornecedor.email,
      contato: fornecedor.contato,
      observacao: fornecedor.observacao,
      telefonePrincipal: fornecedor.telefonePrincipal,
      telefoneSecundario: fornecedor.telefoneSecundario,
      inscEstadual: fornecedor.inscEstadual,
      inscMunicipal: fornecedor.inscMunicipal,
      isento: fornecedor.isento,
      endereco: fornecedor.endereco
    };
  }
}
