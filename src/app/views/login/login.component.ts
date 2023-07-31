import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContaFuncionario } from 'src/app/models/ContaFuncionario';

@Injectable({
  providedIn: 'root',
})
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
  maxPasswdLength = 50;
  lembrarSenha: FormGroup;

  loginForm = new FormGroup({
    userInput: new FormControl(''),
    passwordInput: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.lembrarSenha = this.formBuilder.group({});
  }

  private apiBack = 'http://localhost:8080';

  efetuarLogin() {
    // Coleta as informações digitadas pelo usuário no formGroup.
    const dadosFuncionario: ContaFuncionario = {
      usuario: this.loginForm.controls['userInput'].value,
      senha: this.loginForm.controls['passwordInput'].value,
    };

    this.http
      .post<any>(`${this.apiBack}/funcionario/efetuarLogin`, dadosFuncionario, {
        headers: { 'Content-Type': 'application/json' },
        responseType: 'text' as 'json',
      })
      .subscribe(
        (response) => {
          console.log(response); // Mensagem de sucesso ou erro da API
          if (response === 'Login bem-sucedido!') {
            this.router.navigate(['/control']);
            this.loginForm.reset();
          }
        },
        (error) => {
          alert('Usuário ou senha incorretos.');
          this.loginForm.reset();
        }
      );
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
