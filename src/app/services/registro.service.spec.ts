import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { registroService } from './registro.service';
import { Registro } from '../models/registro';

describe('RegistroService', () => {
  let service: registroService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [registroService]
    });
    service = TestBed.inject(registroService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería ser creado', () => {
    expect(service).toBeTruthy();
  });

  it('debería obtener registros', () => {
    const mockRegistros: Registro[] = [
      {
        _id: 1,
        nombre: 'Usuario 1',
        correoElectronico: 'user1@example.com',
        telefono: 123456789,
        areaTrabajo: 'Area 1',
        foto: null
      }
    ];

    service.getRegistro().subscribe(registros => {
      expect(registros.length).toBe(1);
      expect(registros).toEqual(mockRegistros);
    });

    const req = httpMock.expectOne('http://localhost:3000/registro/');
    expect(req.request.method).toBe('GET');
    req.flush(mockRegistros);
  });

  it('debería guardar un registro', () => {
    const mockRegistro: Registro = {
      _id: 1,
      nombre: 'Usuario 1',
      correoElectronico: 'user1@example.com',
      telefono: 123456789,
      areaTrabajo: 'Area 1',
      foto: null
    };

    service.guardarRegistro(mockRegistro).subscribe(registro => {
      expect(registro).toEqual(mockRegistro);
    });

    const req = httpMock.expectOne('http://localhost:3000/registro/');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockRegistro);
    req.flush(mockRegistro);
  });
});
