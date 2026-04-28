import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ContaService } from '../../services/conta.service';

interface ContaResponse {
  name: string;
  agency: string;
  account: string;
  current_balance: number;
}

@Component({
  selector: 'app-tela-home',
  standalone: true,
  templateUrl: './tela-home.component.html',
  styleUrls: ['./tela-home.component.css']
})
export class TelaHomeComponent implements OnInit {

  constructor(
    public contaService: ContaService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // Equivalente ao useEffect do React: reseta cédulas e busca dados da API
    this.contaService.resetCedulas();
    this.requestApi();
  }

  private requestApi(): void {
    this.http.get<ContaResponse>(this.contaService.api()).subscribe(data => {
      this.contaService.name.set(data.name);
      this.contaService.agency.set(data.agency);
      this.contaService.account.set(data.account);
      this.contaService.currentBalance.set(data.current_balance);
    });
  }

  sacar(): void { this.router.navigate(['/sacar']); }
  depositar(): void { this.router.navigate(['/depositar']); }
  transacoes(): void { this.router.navigate(['/transacoes']); }
  voltar(): void { this.router.navigate(['/']); }
}
