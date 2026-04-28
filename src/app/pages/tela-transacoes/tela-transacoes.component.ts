import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ContaService } from '../../services/conta.service';
import { RegistroComponent } from '../../components/registro/registro.component';

interface TransacaoAPI {
  type: string;
  value: number;
  timestamp: string;
  current_balance: number;
}

interface HistoricoResponse {
  all_transactions: TransacaoAPI[];
}

interface Transacao {
  tipo: string;
  valor: number;
  hora: string;
  saldo: number;
}

@Component({
  selector: 'app-tela-transacoes',
  standalone: true,
  imports: [NgIf, NgFor, RegistroComponent],
  templateUrl: './tela-transacoes.component.html',
  styleUrls: ['./tela-transacoes.component.css']
})
export class TelaTransacoesComponent implements OnInit {
  historico: Transacao[] = [];

  constructor(
    public contaService: ContaService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.requestHistory();
  }

  private requestHistory(): void {
    this.http.get<HistoricoResponse>(this.contaService.api() + '/history').subscribe(response => {
      this.historico = response.all_transactions.map(t => ({
        tipo: t.type,
        valor: t.value,
        hora: t.timestamp,
        saldo: t.current_balance
      }));
    });
  }

  formatarData(hora: string): string {
    return new Date(hora).toLocaleString('pt-BR');
  }

  voltar(): void {
    this.router.navigate(['/home']);
  }
}
