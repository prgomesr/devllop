import { Injectable } from '@angular/core';
import {ResourceService} from '../../../core/resource-service';
import {Categoria} from '../../../core/model';
import {HttpClient} from '@angular/common/http';
import {CategoriaPagamentoSerializer} from './categoria-pagamento-serializer';

@Injectable()
export class CategoriaPagamentoService extends ResourceService<Categoria> {

  constructor(http: HttpClient) {
    super(
      http,
      'categoriasPagamentos',
      new CategoriaPagamentoSerializer()
    );
  }

}
