import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation-header',
  imports: [RouterLink, RouterLinkActive,],
  templateUrl: './navigation-header.component.html',
  styleUrl: './navigation-header.component.scss'
})
export class NavigationHeaderComponent {

}
