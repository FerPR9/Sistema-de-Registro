import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Registro } from "../models/registro";


@Injectable({
    providedIn: 'root'
  })
  export class MantenerEstadoService {
    private formData: any = null;
  
    setFormData(data: any) {
      this.formData = data;
      console.log('Guardando datos del formulario:', data);
    }
    
  
    getFormData() {
      console.log('Recuperando datos del formulario:', this.formData);
      return this.formData;
    }
    
  
    clearFormData() {
      this.formData = null;
    }
  }
