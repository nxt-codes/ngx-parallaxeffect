import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParallaxeffectDirective } from '../../../ngx-parallaxeffect/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ParallaxeffectDirective,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  
}
