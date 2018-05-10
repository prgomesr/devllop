import {Cliente} from '../../core/model';
import * as moment from 'moment';

export class ClienteSerializer {
  fromJson(json: any): Cliente {
    const cliente = new Cliente();
    cliente.id = json.id;
    cliente.cpf = json.cpf;
    cliente.email = json.email;
    cliente.nome = json.nome;
    cliente.situacao = json.situacao;
    cliente.telefone_principal = json.telefone_principal;
    cliente.telefone_secundario = json.telefone_secundario;
    cliente.sexo = json.sexo;
    cliente.nascimento = moment(json.nascimento, 'YYYY-MM-DD').toDate();
    cliente.rg = json.rg;
    cliente.observacao = json.observacao;
    cliente.endereco = json.endereco;
    cliente.estado_civil = json.estado_civil

    return cliente;
  }

  toJson(cliente: Cliente): any {
    return {
      id: cliente.id,
      cpf: cliente.cpf,
      email: cliente.email,
      nome: cliente.nome,
      situacao: cliente.situacao,
      telefone_principal: cliente.telefone_principal,
      telefone_secundario: cliente.telefone_secundario,
      sexo: cliente.sexo,
      nascimento: cliente.nascimento,
      rg: cliente.rg,
      observacao: cliente.observacao,
      endereco: cliente.endereco,
      estado_civil: cliente.estado_civil
    };
  }
}
