import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { RetroService } from '../retro.service';

@Component({
  selector: 'app-update-retro',
  templateUrl: './update-retro.component.html',
  styleUrls: ['./update-retro.component.css']
})
export class UpdateRetroComponent implements OnInit {
  alert: boolean = false;
  editRetro = new FormGroup ( {
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private router: ActivatedRoute, private retro: RetroService) {}

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id'])
    this.retro.getCurrentRetro(this.router.snapshot.params['id']).subscribe((result: any) => {
      // console.warn("result", result)
        this.editRetro = new FormGroup ( {
        name: new FormControl(result['name']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address'])
      })
    })
  }

  collection() {
    console.warn(this.editRetro.value);
    this.retro.updateRetro(this.router.snapshot.params['id'], this.editRetro.value).subscribe((result) =>
    // console.warn(result)
    this.alert = true
    )
  }

  closeAlert() {
    this.alert = false
  }
}
