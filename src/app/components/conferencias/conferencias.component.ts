import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Conferencia } from 'src/app/models/conferencia';
import { conferenciaService } from 'src/app/services/conferencia.service';

@Component({
  selector: 'app-conferencias',
  templateUrl: './conferencias.component.html',
  styleUrls: ['./conferencias.component.css']
})
export class ConferenciasComponent implements OnInit {
  conferenciaForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
    private toastr: ToastrService,
    private _conferenciaService: conferenciaService) {
    this.conferenciaForm = this.fb.group({
      nombreConferencia: ['', Validators.required],
      nombreConferencista: ['', Validators.required],
      fechaConferencia: ['', Validators.required],
      lugarConferencia: ['', Validators.required],
      cupoConferencia: ['', Validators.required],
      fotoConferencista: [null, Validators.required],
      experienciaConferencista: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  registrarConferencia() {
    const CONFERENCIA: Conferencia = {
      nombreConferencia: this.conferenciaForm.get('nombreConferencia')?.value,
      nombreConferencista: this.conferenciaForm.get('nombreConferencista')?.value,
      fechaConferencia: this.conferenciaForm.get('fechaConferencia')?.value,
      lugarConferencia: this.conferenciaForm.get('lugarConferencia')?.value,
      cupoConferencia: this.conferenciaForm.get('cupoConferencia')?.value,
      fotoConferencista: this.conferenciaForm.get('fotoConferencista')?.value,
      experienciaConferencista: this.conferenciaForm.get('experienciaConferencista')?.value,
    };

    this._conferenciaService.guardarConferencia(CONFERENCIA).subscribe(data => {
      this.toastr.success('La conferencia fue registrada con éxito!', 'Registrado');
      this.router.navigate(['/lista-conferencias']);
    }, error => {
      console.log(error);
      this.toastr.error('Error al registrar la conferencia', 'Error');
      this.conferenciaForm.reset();
    });
  }
  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            this.conferenciaForm.get('fotoConferencista')?.setValue(e.target?.result);
        };
        reader.readAsDataURL(file);
    }
}
}
