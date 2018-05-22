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
      'local',
      'clientes',
      new ClienteSerializer()
    );
  }

}
