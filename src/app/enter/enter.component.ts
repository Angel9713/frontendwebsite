import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrl: './enter.component.css'
})
export class EnterComponent {
  constructor(private route :Router){}
  imglink="quote-removebg-preview.png";
    login(){
       this.route.navigateByUrl('sign')
    }
}
