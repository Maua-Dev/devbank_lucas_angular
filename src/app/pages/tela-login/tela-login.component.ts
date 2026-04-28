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
  private readonly chaveValida = 'https://r2tcz6zsokynb72jb6o4ffd5nm0ryfyz.lambda-url.us-west-2.on.aws/';

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
