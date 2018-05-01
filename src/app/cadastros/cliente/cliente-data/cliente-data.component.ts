import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-data',
  templateUrl: './cliente-data.component.html',
  styleUrls: ['./cliente-data.component.css']
})
export class ClienteDataComponent implements OnInit {

  estadosCivis = [
    {label: 'Solteiro', value: 'S'}
  ];
  sexos = [
    {label: 'Masculino', value: 'M'},
    {label: 'Feminino', value: 'F'}
  ];
  pt = {
    firstDayOfWeek: 0,
    dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    dayNamesShort: ["D", "S", "T", "Q", "Q", "S", "S"],
    dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
    monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
    monthNamesShort: [ "Jan", "Fev", "Mar", "Abr", "Mai", "Jun","Jul", "Ago", "Set", "Out", "Nov", "Dez" ],
    today: 'Hoje',
    clear: 'Limpar'
  };
  cliente: any = {
    nome: ''
  }
  constructor() { }

  ngOnInit() {
  }

  onsubmit(form) {
    console.log(form);
  }

}
