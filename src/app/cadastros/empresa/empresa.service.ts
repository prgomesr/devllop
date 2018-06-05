import { Injectable } from '@angular/core';
import {ResourceService} from '../../core/resource-service';
import {Empresa} from '../../core/model';
import {HttpClient} from '@angular/common/http';
import {EmpresaSerializer} from './empresa-serializer';

@Injectable()
export class EmpresaService extends ResourceService<Empresa> {

  constructor(http: HttpClient) {
    super(
      http,
      'empresas',
      new EmpresaSerializer()
    );
  }

}
