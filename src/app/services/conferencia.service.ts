import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Conferencia } from "../models/conferencia";

@Injectable({
    providedIn: 'root'
})

export class conferenciaService {
    url= 'http://localhost:3000/conferencia/';
    constructor(private http: HttpClient) {}

    getConferencia(): Observable <any>{
        return this.http.get(this.url); 
    }

    guardarConferencia(conferencia: Conferencia): Observable<any>{
        return this.http.post(this.url, conferencia)

    }

}