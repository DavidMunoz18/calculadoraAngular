import { Component } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, DisplayComponent], 
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  operacion: string = '';
  resultado: string = '';

  agregarElemento(elemento: number | string) {
    this.operacion += elemento;
  }

  calcular() {
    try {
      this.resultado = eval(this.operacion).toString();
    } catch {
      this.resultado = 'Error';
    }
  }

  limpiar() {
    this.operacion = '';
    this.resultado = '';
  }
}

