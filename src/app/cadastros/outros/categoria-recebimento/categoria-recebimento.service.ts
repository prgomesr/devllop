import { Injectable } from '@angular/core';
import {Categoria} from '../../../core/model';
import {ResourceService} from '../../../core/resource-service';
import {HttpClient} from '@angular/common/http';
import {CategoriaRecebimentoSerializer} from './categoria-recebimento-serializer';

@Injectable()
export class CategoriaRecebimentoService extends ResourceService<Categoria> {

  constructor(http: HttpClient) {
    super(
      http,
      'categoriasRecebimentos',
      new CategoriaRecebimentoSerializer()
    );
  }

}
