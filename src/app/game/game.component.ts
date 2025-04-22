import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from '../home/components/nav-bar/nav-bar.component'
import { FooterComponent } from '../home/components/footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  imports: [NavBarComponent, FooterComponent]
})
export class GameComponent {
  constructor(private router: Router) {}

  startGame() {
    this.router.navigate(['dyslexia_game/play']);  
  }
}
