export class ContaCliente {
  codigo: string | null;
  nome: string | null;
  email: string | null;
  senha: string | null;

  constructor(codigo: string, nome: string, email: string, senha: string) {
    this.codigo = codigo;
    this.nome = nome
    this.email = email
    this.senha = senha
  }
}
