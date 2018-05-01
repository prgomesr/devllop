import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

import {Fornecedor} from '../../../core/model';
import {FornecedorService} from '../fornecedor.service';

@Component({
  selector: 'app-fornecedor-data',
  templateUrl: './fornecedor-data.component.html',
  styleUrls: ['./fornecedor-data.component.css']
})
export class FornecedorDataComponent implements OnInit {

  step = 0;
  fornecedor = new Fornecedor();
  constructor(public dialogRef: MatDialogRef<FornecedorDataComponent>,
              private fornecedorService: FornecedorService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.fornecedorService.create(this.fornecedor).subscribe(() => {
      console.log(form.value);
      console.log('Fornecedor salvo com sucesso');
      this.dialogRef.close();
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  getErrorMessage(campo: any) {
    return campo.hasError('required') ? 'Este campo é obrigatório!' :
      campo.hasError('email') ? 'E-mail inválido!' :
        '';
  }

}
