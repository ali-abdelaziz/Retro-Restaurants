import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { RetroService } from '../retro.service';

@Component({
  selector: 'app-add-retro',
  templateUrl: './add-retro.component.html',
  styleUrls: ['./add-retro.component.css']
})
export class AddRetroComponent implements OnInit {
  alert: boolean = false
  addRetro = new FormGroup ( {
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })
  constructor(private retro: RetroService) {}
  ngOnInit(): void {

  }
  collectRetro() {
    // console.warn(this.addRetro.value)
    this.retro.saveRetro(this.addRetro.value).subscribe((result) => {
      console.warn("result is here", result)
    this.alert= true
    this.addRetro.reset({})
    })
  }

  closeAlert() {
    this.alert= false
  }

}
