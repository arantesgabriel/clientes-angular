import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ContaCliente } from 'src/app/models/ContaCliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  providers: [MessageService],
})
export class ControlComponent implements OnInit {
  cliente!: ContaCliente;
  clientes!: ContaCliente[];
  clienteDialog: boolean = false;
  clientesClonados: { [s: string]: ContaCliente } = {};

  constructor(
    private clienteService: ClienteService,
    private messageService: MessageService
  ) {}

  // Lista todas as contas na table ao iniciar a tela.
  ngOnInit() {
    this.clienteService
      .listarClientes()
      .subscribe((data: ContaCliente[]) => (this.clientes = data));
  }

  onRowEditInit(cliente: ContaCliente) {
    this.clientesClonados[cliente.codigo as string] = { ...cliente };
  }

  onRowEditSave(cliente: ContaCliente) {
    console.log("Antes", cliente);
    this.clienteService.salvarCliente(cliente);
    console.log("Depois", cliente);
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Cliente alterado com sucesso.',
    });
  }

  onRowEditCancel(cliente: ContaCliente, codigo: number) {
    this.clientes[codigo] = this.clientesClonados[cliente.codigo as string];
  }
}
