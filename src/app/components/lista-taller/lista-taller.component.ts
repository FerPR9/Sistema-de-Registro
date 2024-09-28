import { Component, OnInit } from '@angular/core';
import { Taller } from 'src/app/models/taller';
import { tallerService } from 'src/app/services/taller.service';

@Component({
  selector: 'app-lista-taller',
  templateUrl: './lista-taller.component.html',
  styleUrls: ['./lista-taller.component.css']
})
export class ListaTallerComponent implements OnInit {
  listTaller: Taller[] = [];

  constructor(private _tallerService: tallerService) {}

  ngOnInit(): void {
    this.obtenerTalleres();
  }

  obtenerTalleres(){
    this._tallerService.getTaller().subscribe(data => {
      console.log(data);
      this.listTaller = data;
    }, error => {
      console.log(error);
    })
  }
}
