import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Taller } from 'src/app/models/taller';
import { tallerService } from 'src/app/services/taller.service';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent implements OnInit {
  tallerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
    private toastr: ToastrService,
    private _tallerService: tallerService) {
    this.tallerForm = this.fb.group({
      nombreTaller: ['', Validators.required],
      nombreResponsable: ['', Validators.required],
      fechaTaller: ['', Validators.required],
      lugarTaller: ['', Validators.required],
      cupoTaller: ['', Validators.required],
      fotoResponsableTaller: [null, Validators.required],
      experienciaResponsableTaller: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  registrarTaller() {
    const TALLER: Taller = {
      nombreTaller: this.tallerForm.get('nombreTaller')?.value,
      nombreResponsable: this.tallerForm.get('nombreResponsable')?.value,
      fechaTaller: this.tallerForm.get('fechaTaller')?.value,
      lugarTaller: this.tallerForm.get('lugarTaller')?.value,
      cupoTaller: this.tallerForm.get('cupoTaller')?.value,
      fotoResponsableTaller: this.tallerForm.get('fotoResponsableTaller')?.value,
      experienciaResponsableTaller: this.tallerForm.get('experienciaResponsableTaller')?.value,
    };

    this._tallerService.guardarTaller(TALLER).subscribe(data => {
      this.toastr.success('El taller fue registrado con éxito!', 'Registrado');
      this.router.navigate(['/lista-talleres']);
    }, error => {
      console.log(error);
      this.toastr.error('Error al registrar el taller', 'Error');
      this.tallerForm.reset();
    });
  }
  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            this.tallerForm.get('fotoResponsableTaller')?.setValue(e.target?.result);
        };
        reader.readAsDataURL(file);
    }
}
}
