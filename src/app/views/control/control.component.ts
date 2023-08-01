import { Component } from '@angular/core';
import { ContaCliente } from 'src/app/models/ContaCliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent {

  clientes!: ContaCliente[];

  constructor(private clienteService:ClienteService) {}

  ngOnInit() {
    this.clienteService.getClientes().then((data) => {
      this.clientes = data;
    });
  }
}
