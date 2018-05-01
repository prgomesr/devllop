import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ResourceService} from '../../core/resource-service';
import {Fornecedor} from '../../core/model';
import {FornecedorSerializer} from './fornecedor-serializer';

@Injectable()
export class FornecedorService extends ResourceService<Fornecedor> {

  constructor(httpClient: HttpClient) {

    super(
      httpClient,
      'http://localhost:3000',
      'fornecedores',
      new FornecedorSerializer()
    );
  }

}
