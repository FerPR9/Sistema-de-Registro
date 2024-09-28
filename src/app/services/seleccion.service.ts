// seleccion.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeleccionService {
  private seleccionadoId: string = '';

  constructor() { }

  public setSeleccionadoId(id: string) {
    this.seleccionadoId = id;
  }

  public getSeleccionadoId(): string {
    return this.seleccionadoId;
  }
}
