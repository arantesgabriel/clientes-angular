import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  loading: boolean = false;

  cadastroForm = new FormGroup({
    userInput: new FormControl(''),
    emailInput: new FormControl(''),
    passwordInput: new FormControl(''),
  });

  constructor(private router: Router, private http: HttpClient) {}

  private apiBack = 'http://localhost:8080';

  cadastrarCliente() {
    const novaConta = {
      nome: this.cadastroForm.controls['userInput'].value,
      email: this.cadastroForm.controls['emailInput'].value,
      senha: this.cadastroForm.controls['passwordInput'].value,
    };
    return this.http
      .post(`${this.apiBack}/clientes/cadastrar`, novaConta)
      .subscribe(
        (response) => {
          console.log('Sucesso:', response);
        },
        (error) => {
          console.error('Erro:', error);
        }
      );
  }

  // Método que realiza o efeito de loading do botão criar conta
  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  redirecionarLogin(): void {
    this.router.navigate(['/login']);
  }
}
