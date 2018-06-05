import {Injectable} from '@angular/core';
import {ResourceService} from '../../../core/resource-service';
import {Categoria} from '../../../core/model';
import {HttpClient} from '@angular/common/http';
import {CategoriaSerializer} from './categoria-serializer';

@Injectable()
export class CategoriaService extends ResourceService<Categoria> {

  constructor(http: HttpClient) {
    super(
      http,
      'categorias',
      new CategoriaSerializer());
  }
}
