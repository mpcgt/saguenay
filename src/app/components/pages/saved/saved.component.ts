import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../ui/navbar/navbar.component";

@Component({
  selector: 'app-saved',
  standalone: true,
  imports: [RouterModule, NavbarComponent],
  templateUrl: './saved.component.html',
  styleUrl: './saved.component.css'
})
export class SavedComponent {

}
