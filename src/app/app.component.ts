import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shuffle-jump-hero';
}
