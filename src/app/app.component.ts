import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from "./components/ui/navbar/navbar.component";
import { HeroComponent } from "./components/ui/hero/hero.component";
import { NavigationComponent } from "./components/ui/navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FontAwesomeModule, 
    NavbarComponent, 
    HeroComponent, 
    NavigationComponent,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'saguenay';
  
  ngOnInit(): void {
  }
}
