// src/app/services/areaTrabajo.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaTrabajoService {
  private apiUrl = 'http://localhost:3000/area/areas';

  constructor(private http: HttpClient) {}

  // src/app/services/areaTrabajo.service.ts
public obtenerAreasDeTrabajo(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
}



  
  