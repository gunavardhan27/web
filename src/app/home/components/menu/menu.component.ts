import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
@Component({
  selector: 'app-menu',
  imports: [MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Output() eventEmit: EventEmitter<any> = new EventEmitter()
  emitEvent() {
    this.eventEmit.emit()
  }
}
