import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CuadradosComponent } from './cuadrados/cuadrados/cuadrados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CuadradosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'maquet-app';
}
