import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Taller } from "../models/taller";

@Injectable({
    providedIn: 'root'
})

export class tallerService {
    url= 'http://localhost:3000/taller/';
    constructor(private http: HttpClient) {}

    getTaller(): Observable <any>{
        return this.http.get(this.url); 
    }

    guardarTaller(taller: Taller): Observable<any>{
        return this.http.post(this.url, taller)

    }

}