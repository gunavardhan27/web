import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shared-interface',
  imports: [FormsModule],
  templateUrl: './shared-interface.component.html',
  styleUrl: './shared-interface.component.css'
})
export class SharedInterfaceComponent {
  filterText!: string
}
