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
    this.clientesClonados[cliente.codigo as string] = { ...cliente };
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
    this.clientes[codigo] = this.clientesClonados[cliente.codigo as string];
  }

  deletarCliente(cliente: ContaCliente) {
    this.confirmationService.confirm({
      message:
        'Você tem certeza que deseja deletar o usuário ' + cliente.nome + '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (cliente.codigo !== null) {
          const codigoNumero = parseInt(cliente.codigo, 10); // Converter string para número
          if (!isNaN(codigoNumero)) {
            this.clienteService.deletarCliente(codigoNumero).subscribe(
              () => {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Sucesso',
                  detail: 'Cliente Excluído',
                  life: 3000,
                });
              },
              (error) => {
                console.error('Erro ao excluir o cliente:', error);
              }
            );
          } else {
            console.error('Erro ao converter o código do cliente para número.');
          }
        } else {
          console.error('O código do cliente é nulo.');
        }
      },
    });
  }
}
