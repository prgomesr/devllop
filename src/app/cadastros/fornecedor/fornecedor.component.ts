import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Fornecedor} from '../../core/model';
import {MatDialog, MatDialogRef, MatPaginator, MatTableDataSource} from '@angular/material';
import {FornecedorDataComponent} from './fornecedor-data/fornecedor-data.component';
import {FornecedorService} from './fornecedor.service';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  fornecedores = [
    {id: 1, razao: 'MERCADO DO ZE LTDA', fantasia: 'MERCADO DO ZE', cnpj: '11.111.111/0001-11', telefonePrincipal: '11 2121-2121'},
    {id: 1, razao: 'MERCADO DO ZE LTDA', fantasia: 'MERCADO DO ZE', cnpj: '11.111.111/0001-11', telefonePrincipal: '11 2121-2121'},
    {id: 1, razao: 'MERCADO DO ZE LTDA', fantasia: 'MERCADO DO ZE', cnpj: '11.111.111/0001-11', telefonePrincipal: '11 2121-2121'},
    {id: 1, razao: 'MERCADO DO ZE LTDA', fantasia: 'MERCADO DO ZE', cnpj: '11.111.111/0001-11', telefonePrincipal: '11 2121-2121'},
    {id: 1, razao: 'MERCADO DO ZE LTDA', fantasia: 'MERCADO DO ZE', cnpj: '11.111.111/0001-11', telefonePrincipal: '11 2121-2121'},
    {id: 1, razao: 'MERCADO DO ZE LTDA', fantasia: 'MERCADO DO ZE', cnpj: '11.111.111/0001-11', telefonePrincipal: '11 2121-2121'}
  ];

  constructor(private dialog: MatDialog,
              private fornecedorService: FornecedorService) { }

  ngOnInit() {
    this.getAll();
  }


  getAll() {
    // return this.fornecedorService.list({pageNumber: 1, pageSize: 1}).subscribe(dados => this.fornecedores = dados);
  }

  openDialog(): void {
    this.dialog.open(FornecedorDataComponent, {
      width: '600px',
      height: '460px'
    });
  }

}
