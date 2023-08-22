import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ContaCliente } from 'src/app/models/ContaCliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class ControlComponent implements OnInit {
  cliente!: ContaCliente;
  clientes!: ContaCliente[];
  clienteDialog: boolean = false;
  clientesClonados: { [s: string]: ContaCliente } = {};

  constructor(
    private clienteService: ClienteService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  // Lista todas as contas na table ao iniciar a tela.
  ngOnInit() {
    this.clienteService
      .listarClientes()
      .subscribe((data: ContaCliente[]) => (this.clientes = data));
  }

  onRowEditInit(cliente: ContaCliente) {
    this.clientesClonados[cliente.codigo as number] = { ...cliente };
  }

  onRowEditSave(cliente: ContaCliente) {
    this.clienteService.editarCliente(cliente).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Cliente atualizado com sucesso.',
        });
      },
      (error) => {
        console.error('Erro ao salvar cliente', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Ocorreu um erro ao salvar o cliente.',
        });
      }
    );
  }

  onRowEditCancel(cliente: ContaCliente, codigo: number) {
    this.clientes[codigo] = this.clientesClonados[+cliente.codigo];
  }

  deletarCliente(cliente: ContaCliente) {
    this.confirmationService.confirm({
      message:
        'Você tem certeza que deseja deletar o usuário ' + cliente.nome + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.clienteService.deletarCliente(cliente.codigo).subscribe(
          () => {
            console.log('Cliente excluído com sucesso.');
            this.clienteService
              .listarClientes()
              .subscribe((data: ContaCliente[]) => (this.clientes = data));
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Cliente excluído com sucesso.',
            });
          },
          (error) => {
            console.error('Erro ao excluir cliente', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: 'Falha ao excluir cliente',
              life: 3000,
            });
          }
        );
      },
    });
  }
}
