import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Registro } from "../models/registro";

@Injectable({
    providedIn: 'root'
})

export class registroService {
    url= 'http://localhost:3000/registro/';
    constructor(private http: HttpClient) {}

    getRegistro(): Observable <any>{
        return this.http.get(this.url); 
    }

    guardarRegistro(registro: Registro): Observable<any>{
        return this.http.post(this.url, registro)

    }

}