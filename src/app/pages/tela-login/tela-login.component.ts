import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { ContaService } from '../../services/conta.service';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
  apiInput = '';
  isAPIerro = false;

  // URL válida para acesso (mesma lógica do React original)
  private readonly chaveValida = 'https://y5klzz3x33bqv3kytn4swkcwji0vlfhw.lambda-url.us-east-1.on.aws/';

  constructor(
    private contaService: ContaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Equivalente ao useEffect(() => setApi(""), []) do React
    this.contaService.api.set('');
    this.apiInput = '';
  }

  logar(): void {
    this.contaService.api.set(this.apiInput);

    if (this.apiInput === this.chaveValida) {
      this.router.navigate(['/home']);
    } else {
      this.isAPIerro = true;
    }
  }
}
