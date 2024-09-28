import { Component, OnInit } from '@angular/core';
import { Registro } from 'src/app/models/registro';
import { registroService } from 'src/app/services/registro.service';


@Component({
  selector: 'app-lista-particpantes',
  templateUrl: './lista-particpantes.component.html',
  styleUrls: ['./lista-particpantes.component.css']
})
export class ListaParticpantesComponent implements OnInit {
  listRegistro: Registro[] = [];
  currentDate = new Date();

  constructor(private _registroService: registroService) {}

  ngOnInit(): void {
    this.obtenerRegistro();
  }
  obtenerRegistro(){
    this._registroService.getRegistro().subscribe(data =>{
      console.log(data);
      this.listRegistro = data;
    }, error =>{
      console.log(error);
    })
  }

}
