import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ContaService } from '../../services/conta.service';
import { CardComponent } from '../../components/card/card.component';

interface ContaResponse {
  name: string;
  agency: string;
  account: string;
  current_balance: number;
}

interface SaqueResponse {
  current_balance: number;
}

@Component({
  selector: 'app-tela-sacar',
  standalone: true,
  imports: [NgIf, CardComponent],
  templateUrl: './tela-sacar.component.html',
  styleUrls: ['./tela-sacar.component.css']
})
export class TelaSacarComponent implements OnInit {
  erroMensagem = '';

  constructor(
    public contaService: ContaService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
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

  get total(): number {
    return this.contaService.totalCedulas;
  }

  sacar(): void {
    const body = {
      '2':   this.contaService.valor2(),
      '5':   this.contaService.valor5(),
      '10':  this.contaService.valor10(),
      '20':  this.contaService.valor20(),
      '50':  this.contaService.valor50(),
      '100': this.contaService.valor100(),
      '200': this.contaService.valor200()
    };

    this.http.post<SaqueResponse>(this.contaService.api() + '/withdraw', body).subscribe({
      next: (response) => {
        this.contaService.currentBalance.set(response.current_balance);
        this.router.navigate(['/home']);
      },
      error: (err: HttpErrorResponse) => {
        this.erroMensagem = err.error?.detail ?? 'Erro ao realizar saque.';
      }
    });
  }

  voltar(): void {
    this.router.navigate(['/home']);
  }
}
