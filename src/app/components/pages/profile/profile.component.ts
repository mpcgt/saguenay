import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../ui/navbar/navbar.component";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
