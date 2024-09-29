import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navigationbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
isLoggedIn: any;
isProfileMenuOpen: any;
toggleLoginStatus() {
throw new Error('Method not implemented.');
}
toggleProfileMenu() {
throw new Error('Method not implemented.');
}
logout() {
throw new Error('Method not implemented.');
}
login() {
throw new Error('Method not implemented.');
}

}