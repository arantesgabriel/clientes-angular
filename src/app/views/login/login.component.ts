import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  nome: string = '';
  senha: string = '';

  cadastrar(): void {
    let inputUsuario = document.getElementById('input-usuario');
    let inputSenha = document.getElementById('input-senha');
    this.validar();
  }

  validar(): void {
    let inputUsuario = document.getElementById('input-usuario');
    let inputSenha = document.getElementById('input-senha');

    if (inputUsuario?.textContent === "") {
      alert("O campo usuário está vazio")
    }

}
}
