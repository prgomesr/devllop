import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {EstadoCivil} from '../../core/model';

@Injectable()
export class EstadoCivilService {
  url = 'http://localhost:8080';
  model = 'estadosCivis';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable <EstadoCivil[]> {
    return this.http.get<any[]>(`${this.url}/${this.model}`);
  }

}
