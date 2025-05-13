import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BtnBindingComponent } from './btn-binding/btn-binding.component';

@Component({
  selector: 'app-root',
  
  imports: [RouterOutlet, BtnBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Button binding';
  body = 'Lisätään toinen component napilla'
  
}
