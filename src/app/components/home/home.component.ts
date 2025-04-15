import { Component } from '@angular/core';
import { NavigationHeaderComponent } from '../navigation-header/navigation-header.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [NavigationHeaderComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
