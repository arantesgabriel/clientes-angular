import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Conta } from 'src/app/models/Conta';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  mensagemErro: string = '';
  mostrarMensagemErro: boolean = false;
  loading: boolean = false;

  cadastroForm = new FormGroup({
    userInput: new FormControl(''),
    emailInput: new FormControl(''),
    passwordInput: new FormControl(''),
  });

  constructor(private router: Router, private http: HttpClient) {}

  private apiBack = 'http://localhost:8080';

  cadastrarCliente(): void {
    // Inicia a animação de carregamento do botão 'criar conta'.
    this.startLoader();

    // Coleta as informações digitadas pelo usuário no formGroup.
    const novaConta: Conta = {
      nome: this.cadastroForm.controls['userInput'].value,
      email: this.cadastroForm.controls['emailInput'].value,
      senha: this.cadastroForm.controls['passwordInput'].value,
    };

    let erro = this.validarCampos(novaConta);
    if (erro.length > 0) {
      this.mostrarMensagemErro = true;
      this.stopLoader();
      return;
    }
    this.enviarClienteBackend(novaConta);
    this.redirecionarLogin();
  }

  validarCampos(novaConta: Conta): string {
    let erro = '';

    // Realiza a validação se o campo nome está nulo ou vazio.
    if (novaConta.nome == null || novaConta.nome === '') {
      erro = 'Nome inválido';
      return erro;
    }

    // Realiza a validação se o campo email está nulo ou vazio.
    if (novaConta.email == null || novaConta.email === '') {
      erro = 'email inválido';
      return erro;
    }
    // Realiza a validação se o campo senha está nulo ou vazio.
    if (novaConta.senha == null || novaConta.senha === '') {
      erro = 'senha inválido';
      return erro;
    }

    return erro;
  }

  // Efetua o cadastro de uma nova conta com os dados digitados pelo usuário no banco de dados.
  enviarClienteBackend(novaConta: Conta) {
    this.http.post(`${this.apiBack}/clientes/cadastrar`, novaConta).subscribe(
      (response) => {
        this.stopLoader();
        console.log('Sucesso:', response);
      },
      (error) => {
        this.stopLoader();
        console.error('Erro:', error);
      }
    );
  }

  // Método que realiza o efeito de loading do botão criar conta.
  startLoader() {
    this.loading = true;
  }
  stopLoader() {
    this.loading = false;
  }

  // Volta pra tela de login ao clicar no text 'Já possuo conta'.
  redirecionarLogin(): void {
    this.router.navigate(['/login']);
  }
}
