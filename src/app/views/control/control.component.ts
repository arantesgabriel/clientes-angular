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
  submitted: boolean = false;
  clienteDialog: boolean = false;
  clientesSelecionados!: ContaCliente;

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.clienteService
      .listarClientes()
      .subscribe((data: ContaCliente[]) => (this.clientes = data));
  }

  openNew() {
    this.submitted = false;
    this.clienteDialog = true;
  }

  editarCliente(cliente: ContaCliente) {
    this.clienteDialog = true;
  }

  salvarCliente(cliente: ContaCliente) {
    this.clienteService.salvarCliente(cliente);
    this.clientes = [...this.clientes];
    this.clienteDialog = false;
  }

  hideDialog() {
    this.clienteDialog = false;
  }

  deletarCliente(cliente: ContaCliente) {}
}
