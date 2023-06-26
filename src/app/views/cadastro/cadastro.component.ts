import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  senhaCadastro!: string;
  loading: boolean = false;

  cadastroForm = new FormGroup({
    userInput: new FormControl(''),
    emailInput: new FormControl(''),
    passwordInput: new FormControl('')
  });

  // Método que realiza o efeito de loading do botão criar conta
  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 2000);
  }

}
