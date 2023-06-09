import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { RetroService } from '../retro.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert: boolean = false
  register = new FormGroup ( {
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private retro: RetroService) {}

  ngOnInit(): void {

  }

  collection() {
    // console.warn(this.register.value)
    this.retro.registerUser(this.register.value).subscribe((result) => {
      console.warn("result", result)
    this.alert = true
    })
  }

  closeAlert() {
    this.alert = false
  }
}
