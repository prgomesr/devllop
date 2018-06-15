import {Resource, Serializer} from './model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {InstanciasFiltro} from './InstanciasFiltro';
// import 'rxjs/add/operator/map';

export class InstResourceService<T extends Resource> {
  url = 'http://localhost:8080';
  constructor(
    private http: HttpClient,
    private endpoint: string,
    private serializer: Serializer) {}

  public create(item: T): Observable<T> {
    return this.http
      .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
      .map(data => this.serializer.fromJson(data) as T);
  }

  public update(item: T): Observable<T> {
    return this.http
      .put<T>(`${this.url}/${this.endpoint}/${item.id}`,
        this.serializer.toJson(item))
      .map(data => this.serializer.fromJson(data) as T);
  }

  read(id: number): Observable<T> {
    return this.http
      .get(`${this.url}/${this.endpoint}/${id}`)
      .map((data: any) => this.serializer.fromJson(data) as T);
  }

  list(filtro: InstanciasFiltro): Observable<any> {
    let params = new HttpParams();
    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());
    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
    }
    if (filtro.cpf) {
      params = params.set('cpf', filtro.cpf);
    }
    if (filtro.sexo) {
      params = params.set('sexo', filtro.sexo);
    }
    if (filtro.situacao) {
      params = params.set('situacao', filtro.situacao);
    }
    if (filtro.ativo) {
      params = params.set('ativo', filtro.ativo.toString());
    }
  return this.http
    .get(`${this.url}/${this.endpoint}?resumo`, {params})
    .map((data: any) => {
      const result = {
        registros: data.content,
        total: data.totalElements
      };
      return result;
    });
  }

  /* search(filtro: InstanciasFiltro): Observable<any> {
    let params = new HttpParams();
      if (filtro.nome) {
        params = params.set('nome', filtro.nome);
      }
      if (filtro.cpf) {
        params = params.set('cpf', filtro.cpf);
      }
      if (filtro.sexo) {
        params = params.set('sexo', filtro.sexo);
      }
      if (filtro.situacao) {
        params = params.set('situacao', filtro.situacao);
      }
      if (filtro.ativo) {
        params = params.set('ativo', filtro.ativo.toString());
      }
    return this.http.get(`${this.url}/${this.endpoint}?resumo`,  {params})
      .map((data: any) => data.content);
  } */

  delete(id: number) {
    return this.http
      .delete(`${this.url}/${this.endpoint}/${id}`);
  }

  getCep(cep) {
    return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json`);
  }

  private headers () {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return httpOptions;
  }

}
