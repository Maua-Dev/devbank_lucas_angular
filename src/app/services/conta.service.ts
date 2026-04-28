import { Injectable, signal } from '@angular/core';

/**
 * ContaService substitui o React Context (assessment-context.tsx).
 * Usa Signals do Angular 17 para reatividade, equivalente ao useState do React.
 */
@Injectable({
  providedIn: 'root'
})
export class ContaService {
  // Dados da conta (equivalente aos estados do Context)
  api    = signal<string>('');
  name   = signal<string>('');
  agency = signal<string>('');
  account = signal<string>('');
  currentBalance = signal<number>(0);

  // Cédulas (equivalente aos valor2, valor5... do Context)
  valor2   = signal<number>(0);
  valor5   = signal<number>(0);
  valor10  = signal<number>(0);
  valor20  = signal<number>(0);
  valor50  = signal<number>(0);
  valor100 = signal<number>(0);
  valor200 = signal<number>(0);

  /** Zera todas as cédulas — chamado ao entrar na Home */
  resetCedulas(): void {
    this.valor2.set(0);
    this.valor5.set(0);
    this.valor10.set(0);
    this.valor20.set(0);
    this.valor50.set(0);
    this.valor100.set(0);
    this.valor200.set(0);
  }

  /** Retorna o total calculado com base nas cédulas selecionadas */
  get totalCedulas(): number {
    return (
      this.valor2()   * 2   +
      this.valor5()   * 5   +
      this.valor10()  * 10  +
      this.valor20()  * 20  +
      this.valor50()  * 50  +
      this.valor100() * 100 +
      this.valor200() * 200
    );
  }
}
