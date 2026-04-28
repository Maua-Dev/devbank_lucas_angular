import { Routes } from '@angular/router';
import { TelaLoginComponent } from './pages/tela-login/tela-login.component';
import { TelaHomeComponent } from './pages/tela-home/tela-home.component';
import { TelaDepositoComponent } from './pages/tela-deposito/tela-deposito.component';
import { TelaSacarComponent } from './pages/tela-sacar/tela-sacar.component';
import { TelaTransacoesComponent } from './pages/tela-transacoes/tela-transacoes.component';

export const routes: Routes = [
  { path: '', component: TelaLoginComponent },
  { path: 'home', component: TelaHomeComponent },
  { path: 'depositar', component: TelaDepositoComponent },
  { path: 'sacar', component: TelaSacarComponent },
  { path: 'transacoes', component: TelaTransacoesComponent },
  { path: '**', redirectTo: '' }
];
