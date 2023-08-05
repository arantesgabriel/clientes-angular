import { Component, OnInit } from '@angular/core';
import { ContaCliente } from 'src/app/models/ContaCliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {
  cliente!: ContaCliente;
  clientes!: ContaCliente[];
  clientesSelecionados!: ContaCliente;

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.clienteService
      .listarClientes()
      .subscribe((data: ContaCliente[]) => (this.clientes = data));
  }

  editarCliente(cliente: ContaCliente) {
    this.clienteService.editarCliente(cliente);
  }

  deletarCliente(cliente: ContaCliente) {}
}
