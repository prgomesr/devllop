import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../../core/model';
import {ClienteSerializer} from './cliente-serializer';
import {InstResourceService} from '../../core/inst-resource-service';

@Injectable()
export class ClienteService extends InstResourceService<Cliente> {

  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'clientes',
      new ClienteSerializer()
    );
  }

}
