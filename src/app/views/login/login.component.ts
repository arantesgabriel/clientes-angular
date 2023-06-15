import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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
  lembrarSenha: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.lembrarSenha = this.formBuilder.group({});
  }

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

  redirecionarCadastro(): void {
    this.router.navigate(['/cadastro']);
  }
}
