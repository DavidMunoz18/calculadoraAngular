import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display',
  standalone: true,
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'] 
})
export class DisplayComponent {
  @Input() operacion: string = '';
  @Input() resultado: string = '';
}
