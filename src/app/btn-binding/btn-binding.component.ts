import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-btn-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './btn-binding.component.html',
  styleUrl: './btn-binding.component.css'
})
export class BtnBindingComponent {
  header = 'Button page';
  note: string = "";
  toggle: boolean = true;
  line: string = '';
  
  changeColor = () => {
    this.toggle = !this.toggle;
    this.note = this.toggle ? '' : 'Olet painanut nappia!'
    this.handleInputField();
  } 

  handleInputField = () => {
    console.log("Input handle works!")
  }
  
}
