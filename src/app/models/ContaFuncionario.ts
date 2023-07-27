export class ContaFuncionario {
  usuario: string | null;
  senha: string | null;

  constructor(usuario: string, senha: string) {
    this.usuario = usuario
    this.senha = senha
  }
}
