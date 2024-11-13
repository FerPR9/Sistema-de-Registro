import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { conferenciaService } from './conferencia.service';
import { Conferencia } from '../models/conferencia';

describe('conferenciaService', () => {
  let service: conferenciaService;
  let httpMock: HttpTestingController;

  // Configuración inicial antes de cada prueba
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [conferenciaService] 
    });
    service = TestBed.inject(conferenciaService); // Inyecta el servicio
    httpMock = TestBed.inject(HttpTestingController); // Inyecta el controlador HTTP 
  });

  // Verificación final después de cada prueba
  afterEach(() => {
    httpMock.verify(); 
  });

  // Prueba para verificar que el servicio se crea correctamente
  it('debería ser creado', () => {
    expect(service).toBeTruthy(); 
  });

  // Prueba para verificar que se obtienen las conferencias correctamente
  it('debería obtener conferencias', () => {
    // Datos simulados de conferencias
    const mockConferencias: Conferencia[] = [
      {
        _id: 1,
        nombreConferencia: 'Conferencia 1',
        nombreConferencista: 'Conferencista 1',
        fechaConferencia: new Date(),
        lugarConferencia: 'Lugar 1',
        cupoConferencia: 100,
        fotoConferencista: null,
        experienciaConferencista: 'Experiencia 1'
      }
    ];

    // Llamada al servicio para obtener conferencias
    service.getConferencia().subscribe(conferencias => {
      expect(conferencias.length).toBe(1); 
      expect(conferencias).toEqual(mockConferencias); 
    });

    // Simula la solicitud HTTP GET
    const req = httpMock.expectOne('http://localhost:3000/conferencia/');
    expect(req.request.method).toBe('GET'); 
    req.flush(mockConferencias); 
  });

  // Prueba para verificar que se guarda una conferencia correctamente
  it('debería guardar una conferencia', () => {
    // Datos simulados de una conferencia
    const mockConferencia: Conferencia = {
      _id: 1,
      nombreConferencia: 'Conferencia 1',
      nombreConferencista: 'Conferencista 1',
      fechaConferencia: new Date(),
      lugarConferencia: 'Lugar 1',
      cupoConferencia: 100,
      fotoConferencista: null,
      experienciaConferencista: 'Experiencia 1'
    };

    // Llamada al servicio para guardar una conferencia
    service.guardarConferencia(mockConferencia).subscribe(conferencia => {
      expect(conferencia).toEqual(mockConferencia); 
    });

    // Simula la solicitud HTTP POST
    const req = httpMock.expectOne('http://localhost:3000/conferencia/');
    expect(req.request.method).toBe('POST'); 
    expect(req.request.body).toEqual(mockConferencia); 
    req.flush(mockConferencia); 
  });
});
