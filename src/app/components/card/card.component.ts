import { Component, Input, OnChanges, signal, effect } from '@angular/core';
import { ContaService } from '../../services/conta.service';
import { Signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  /** Valor da cédula: 2, 5, 10, 20, 50, 100 ou 200 */
  @Input() nota!: number;

  quantidade = signal<number>(0);

  constructor(private contaService: ContaService) {}

  handleMinus(): void {
    if (this.quantidade() > 0) {
      this.quantidade.update(v => v - 1);
      this.atualizarServico();
    }
  }

  handlePlus(): void {
    this.quantidade.update(v => v + 1);
    this.atualizarServico();
  }

  /** Sincroniza a quantidade com o signal correto no service */
  private atualizarServico(): void {
    const qtd = this.quantidade();
    switch (this.nota) {
      case 2:   this.contaService.valor2.set(qtd);   break;
      case 5:   this.contaService.valor5.set(qtd);   break;
      case 10:  this.contaService.valor10.set(qtd);  break;
      case 20:  this.contaService.valor20.set(qtd);  break;
      case 50:  this.contaService.valor50.set(qtd);  break;
      case 100: this.contaService.valor100.set(qtd); break;
      case 200: this.contaService.valor200.set(qtd); break;
    }
  }

  /** Reseta o card quando o componente é reutilizado */
  ngOnInit(): void {
    this.quantidade.set(0);
  }
}
