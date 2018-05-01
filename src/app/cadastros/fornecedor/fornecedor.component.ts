import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Fornecedor} from '../../core/model';
import {MatDialog, MatDialogRef, MatPaginator, MatTableDataSource} from '@angular/material';
import {FornecedorDataComponent} from './fornecedor-data/fornecedor-data.component';


const ELEMENT_DATA: Fornecedor[] = [
  {id: 1, cnpj: '44.333.333/0001-11', fantasia: 'PADARIA', razao: 'PADARIA ME', email: '', contato: '',
    observacao: '', telefonePrincipal: '17 3212-1111',
    telefoneSecundario: '', inscEstadual: '', inscMunicipal: '', isento: true, endereco: null},
  {id: 1, cnpj: '44.333.333/0001-11', fantasia: 'PADARIA', razao: 'PADARIA ME', email: '', contato: '',
    observacao: '', telefonePrincipal: '17 3212-1111',
    telefoneSecundario: '17 2121-2121', inscEstadual: '', inscMunicipal: '', isento: true, endereco: null},
  {id: 1, cnpj: '44.333.333/0001-11', fantasia: 'PADARIA', razao: 'PADARIA ME', email: '', contato: '',
    observacao: '', telefonePrincipal: '17 3212-1111',
    telefoneSecundario: '', inscEstadual: '', inscMunicipal: '', isento: true, endereco: null},
  {id: 1, cnpj: '44.333.333/0001-11', fantasia: 'PADARIA', razao: 'PADARIA ME', email: '', contato: '',
    observacao: '', telefonePrincipal: '17 3212-1111',
    telefoneSecundario: '', inscEstadual: '', inscMunicipal: '', isento: true, endereco: null},
  {id: 1, cnpj: '44.333.333/0001-11', fantasia: 'PADARIA', razao: 'PADARIA ME', email: '', contato: '',
    observacao: '', telefonePrincipal: '17 3212-1111',
    telefoneSecundario: '', inscEstadual: '', inscMunicipal: '', isento: true, endereco: null},
  {id: 1, cnpj: '44.333.333/0001-11', fantasia: 'PADARIA', razao: 'PADARIA ME', email: '', contato: '',
    observacao: '', telefonePrincipal: '17 3212-1111',
    telefoneSecundario: '', inscEstadual: '', inscMunicipal: '', isento: true, endereco: null},
];

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit, AfterViewInit {

  displayedColumns = ['fantasia', 'razao', 'cnpj', 'telefonePrincipal', 'acoes'];
  fornecedores = new MatTableDataSource<Fornecedor>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.fornecedores.paginator = this.paginator;
  }

  openDialog(): void {
    this.dialog.open(FornecedorDataComponent, {
      width: '600px',
      height: '460px'
    });
  }

}
