import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-nav-bar',
  imports: [MatSlideToggleModule,MatIcon],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private renderer: Renderer2) {}
  isDyslexiaMode = false 
  isCalmMode = false 
  @Output() logoutEvent:EventEmitter<null> = new EventEmitter() 
  toggleCalmMode(event:any){
    if (event.target.checked) {
      this.renderer.addClass(document.body, 'calm-mode');
    } else {
      this.renderer.removeClass(document.body, 'calm-mode');
    }
  }
  toggleDyslexiaMode(event: any) {
    if (event.target.checked) {
      this.renderer.addClass(document.body, 'dyslexia-mode');
    } else {
      this.renderer.removeClass(document.body, 'dyslexia-mode');
    }
  }
  toggleLogout(){
    this.logoutEvent.emit()
  }
}
