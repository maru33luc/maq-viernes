import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CuadradosComponent } from './cuadrados/cuadrados/cuadrados.component';
import { AboutUsComponent } from './about-us/about-us/about-us.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CuadradosComponent, AboutUsComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'maquet-app';
}
