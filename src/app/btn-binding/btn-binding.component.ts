import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn-binding',
  imports: [CommonModule],
  templateUrl: './btn-binding.component.html',
  styleUrl: './btn-binding.component.css'
})
export class BtnBindingComponent {
  header = 'Button page';
  note: string = "";
  toggle: boolean = true;
  changeColor = () => {
    this.toggle = !this.toggle;
    this.note = this.toggle ? '' : 'Olet painanut nappia!'
  } 
  
}
