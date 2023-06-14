import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';
  campoUsuarioVazio: boolean = false;
  campoSenhaVazio: boolean = false;

  validar(): void {

    // Validação campo usuário.
    this.campoUsuarioVazio = this.usuario === '';

    if (this.campoUsuarioVazio) {
      setTimeout(() => {
        this.campoUsuarioVazio = false;
      }, 4000); // 4 segundos em milissegundos
    }

    // Validação campo senha.
    this.campoSenhaVazio = this.senha === '';

    if (this.campoSenhaVazio) {
      setTimeout(() => {
        this.campoSenhaVazio = false;
      }, 4000); // 4 segundos em milissegundos
    }
}
}
