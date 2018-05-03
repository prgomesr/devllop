import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

import {Fornecedor} from '../../../core/model';
import {FornecedorService} from '../fornecedor.service';
import {ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-fornecedor-data',
  templateUrl: './fornecedor-data.component.html',
  styleUrls: ['./fornecedor-data.component.css']
})
export class FornecedorDataComponent implements OnInit {

  index = 0;
  fornecedor = new Fornecedor();
  constructor(public dialogRef: MatDialogRef<FornecedorDataComponent>,
              private fornecedorService: FornecedorService,
              private toasty: ToastyService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.fornecedorService.create(this.fornecedor).subscribe(() => {
      console.log(form.value);
      this.toasty.success({
        title: 'Sucesso!',
        msg: 'Fornecedor cadastrado com sucesso.'});
      this.dialogRef.close();
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openNext() {
    this.index = (this.index === 2) ? 0 : this.index + 1;
  }

  openPrev() {
    this.index = (this.index === 0) ? 2 : this.index - 1;
  }

  getErrorMessage(campo: any) {
    return campo.hasError('required') ? 'Este campo é obrigatório!' :
      campo.hasError('email') ? 'E-mail inválido!' :
        '';
  }

}
