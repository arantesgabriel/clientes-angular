import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContaCliente } from 'src/app/models/ContaCliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiBack = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  async getClientes(): Promise<ContaCliente[]> {
    try {
      const data = await this.http
        .get<ContaCliente[]>(this.apiBack)
        .toPromise();
      return data || []; // Se a resposta for indefinida, retorna um array vazio
    } catch (error) {
      console.error('Erro ao obter os clientes:', error);
      return []; // Retorna um array vazio em caso de erro
    }
  }
}
