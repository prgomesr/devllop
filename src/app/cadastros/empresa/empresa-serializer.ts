import {Empresa} from '../../core/model';
import * as moment from 'moment';

export class EmpresaSerializer {
  fromJson(json: any): Empresa {
    const empresa = new Empresa();
    empresa.id = json.id;
    empresa.cnpj = json.cnpj;
    empresa.fantasia = json.fantasia;
    empresa.razaoSocial = json.razaoSocial;
    empresa.inscEstadual = json.inscEstadual;
    empresa.inscMunicipal = json.inscMunicipal;
    empresa.isento = json.isento;
    empresa.email = json.email;
    empresa.dataFundacao = moment (json.dataFundacao, 'YYYY-MM-DD').toDate();
    return empresa;
  }

  toJson(empresa: Empresa): any {
    return {
      id: empresa.id,
      cnpj: empresa.cnpj,
      fantasia: empresa.fantasia,
      razaoSocial: empresa.razaoSocial,
      inscEstadual: empresa.inscEstadual,
      inscMunicipal: empresa.inscMunicipal,
      isento: empresa.isento,
      email: empresa.email,
      dataFundacao: empresa.dataFundacao
    };
  }
}
