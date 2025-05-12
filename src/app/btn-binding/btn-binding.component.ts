import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn-binding',
  imports: [CommonModule],
  templateUrl: './btn-binding.component.html',
  styleUrl: './btn-binding.component.css'
})
export class BtnBindingComponent {
  header = 'Button page'
  toggle = true
  changeColor = () => {
    this.toggle = !this.toggle;
  } 
}
