import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-cuadrados',
  standalone: true,
  imports: [],
  template: `
  
  <section>

  <div class="elementos elem1"><p>Cuadrado 1</p></div>
  <div class="elementos elem2"><p>Cuadrado 2</p></div>
  <div class="elementos elem3"><p>Cuadrado 3</p></div>
  <div class="elementos elem4"><p>Cuadrado 4</p></div>
  <div class="elementos elem5"><p>Cuadrado 5</p></div>
  <div class="elementos elem6"><p>Cuadrado 6</p></div>


</section>

  `,
  styleUrl: './cuadrados.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuadradosComponent { }
