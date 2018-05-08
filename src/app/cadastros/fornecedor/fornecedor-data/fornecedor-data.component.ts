import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

import {Fornecedor} from '../../../core/model';
import {FornecedorService} from '../fornecedor.service';
import {ToastyService} from 'ng2-toasty';
import {ErrorHandlerService} from '../../../core/error-handler-service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-fornecedor-data',
  templateUrl: './fornecedor-data.component.html',
  styleUrls: ['./fornecedor-data.component.css']
})
export class FornecedorDataComponent implements OnInit {

  index = 0;
  fornecedor = new Fornecedor();
  fornecedores = [];
  @Input() display = false;
  constructor(private fornecedorService: FornecedorService,
              private toasty: ToastyService,
              private errorHandler: ErrorHandlerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.getById(id);
    }
  }

  onSubmit(form) {
    if (this.editando) {
      this.updateModel(form);
    } else {
      this.createModel(form);
    }
  }

  getById(id: number) {
    this.fornecedorService.read(id).subscribe(dado => this.fornecedor = dado,
      err => this.errorHandler.handle(err));
  }

  createModel(form: FormControl) {
    this.fornecedorService.create(this.fornecedor).subscribe(() => {
      this.toasty.success({title: 'Sucesso!', msg: 'Fornecedor cadastrado com sucesso.'});
      this.fornecedor = new Fornecedor();
    },
      err => this.errorHandler.handle(err));
  }

  updateModel(form: FormControl) {
    this.fornecedorService.update(this.fornecedor).subscribe(() => {
      this.toasty.success({title: 'Sucesso!', msg: 'Fornecedor atualizado com sucesso.'});
      this.router.navigate(['/fornecedor']);
      this.display = false;
    }
    , error1 => this.errorHandler.handle(error1));
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

  consultaCep(cep, form) {
    cep = cep.replace(/\D/g, '');
    // Verifica se campo cep possui valor informado.
    if (cep !== '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;
      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.fornecedorService.getCep(cep).subscribe(dados => this.popularEndereco(dados, form),
          err => this.errorHandler.handle(err));
      }
    }
  }

  popularEndereco(dados, formulario) {
    formulario.form.patchValue({
      endereco: {
        logradouro: dados.logradouro,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        uf: dados.uf
      }
    });
  }

  get editando(): any {
    return Boolean (this.fornecedor.id);
  }

}
