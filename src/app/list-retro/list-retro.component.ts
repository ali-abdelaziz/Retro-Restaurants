import { Component, OnInit } from '@angular/core';
import { RetroService } from '../retro.service'

@Component({
  selector: 'app-list-retro',
  templateUrl: './list-retro.component.html',
  styleUrls: ['./list-retro.component.css']
})
export class ListRetroComponent implements OnInit {
  constructor(private retro: RetroService) {}
  collection:any = [];
  ngOnInit(): void {
    this.retro.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
    })
  }

  deleteRetro(item: any) {
    this.collection.splice(item-1, 1)
    this.retro.deleteRetro(item).subscribe((result) => {
      console.warn("result", result)
    })
  }

}
