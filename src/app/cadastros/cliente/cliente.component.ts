import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes = [
    {id: 1, nome: 'MARIO DE ANDRADE', cpf: '111.111.111-11', telefonePrincipal: '17 92121-2121',
      email: 'mario@email.com', situacao: 'EM DIA'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
