import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Fornecedor} from '../../core/model';
import {FornecedorSerializer} from './fornecedor-serializer';
import {InstResourceService} from '../../core/inst-resource-service';

@Injectable()
export class FornecedorService extends InstResourceService<Fornecedor> {

  constructor(httpClient: HttpClient) {

    super(
      httpClient,
      'fornecedores',
      new FornecedorSerializer()
    );
  }

}
