import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from '../../core/resource-service';
import {Cliente} from '../../core/model';
import {ClienteSerializer} from './cliente-serializer';

@Injectable()
export class ClienteService extends ResourceService<Cliente> {

  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'http://192.168.1.115:8000',
      'clientes',
      new ClienteSerializer()
    );
  }

}
