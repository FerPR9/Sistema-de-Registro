import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { tallerService } from './taller.service';
import { Taller } from '../models/taller';

describe('TallerService', () => {
  let service: tallerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [tallerService]
    });
    service = TestBed.inject(tallerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería ser creado', () => {
    expect(service).toBeTruthy();
  });

  it('debería obtener talleres', () => {
    const mockTalleres: Taller[] = [
      {
        _id: 1,
        nombreTaller: 'Taller 1',
        nombreResponsable: 'Responsable 1',
        fechaTaller: new Date(),
        lugarTaller: 'Lugar 1',
        cupoTaller: 30,
        fotoResponsableTaller: null,
        experienciaResponsableTaller: 'Experiencia 1'
      }
    ];

    service.getTaller().subscribe(talleres => {
      expect(talleres.length).toBe(1);
      expect(talleres).toEqual(mockTalleres);
    });

    const req = httpMock.expectOne('http://localhost:3000/taller/');
    expect(req.request.method).toBe('GET');
    req.flush(mockTalleres);
  });

  it('debería guardar un taller', () => {
    const mockTaller: Taller = {
      _id: 1,
      nombreTaller: 'Taller 1',
      nombreResponsable: 'Responsable 1',
      fechaTaller: new Date(),
      lugarTaller: 'Lugar 1',
      cupoTaller: 30,
      fotoResponsableTaller: null,
      experienciaResponsableTaller: 'Experiencia 1'
    };

    service.guardarTaller(mockTaller).subscribe(taller => {
      expect(taller).toEqual(mockTaller);
    });

    const req = httpMock.expectOne('http://localhost:3000/taller/');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockTaller);
    req.flush(mockTaller);
  });
});
