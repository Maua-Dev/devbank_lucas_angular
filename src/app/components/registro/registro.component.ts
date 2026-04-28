import { Component, Input, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [NgClass],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  @Input() tipo!: string;
  @Input() valor!: number;
  @Input() data!: string;
  @Input() saldo!: number;

  isDeposit = false;

  ngOnInit(): void {
    this.isDeposit = this.tipo === 'deposit';
  }
}
