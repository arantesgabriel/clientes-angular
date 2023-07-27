export class ContaCliente {
  nome: string | null;
  email: string | null;
  senha: string | null;

  constructor(nome: string, email: string, senha: string) {
    this.nome = nome
    this.email = email
    this.senha = senha
  }
}
