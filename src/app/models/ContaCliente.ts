export class ContaCliente {
  codigo: number;
  nome: string | null;
  email: string | null;
  senha: string | null;

  constructor(codigo: number, nome: string, email: string, senha: string) {
    this.codigo = codigo;
    this.nome = nome
    this.email = email
    this.senha = senha
  }
}
