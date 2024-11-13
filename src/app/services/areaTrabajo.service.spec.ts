import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AreaTrabajoService } from './areaTrabajo.service';

describe('AreaTrabajoService', () => {
  let service: AreaTrabajoService;
  let httpMock: HttpTestingController;

  // Configuración inicial antes de cada prueba
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AreaTrabajoService] 
    });
    service = TestBed.inject(AreaTrabajoService); 
    httpMock = TestBed.inject(HttpTestingController); 
  });

  // Verificación final después de cada prueba
  afterEach(() => {
    // Verifica que no haya solicitudes HTTP pendientes
    httpMock.verify();
  });

  // Prueba para verificar que el servicio se crea correctamente
  it('debería ser creado', () => {
    expect(service).toBeTruthy(); 
  });

  // Prueba para verificar que se obtienen las áreas de trabajo correctamente
  it('debería obtener las áreas de trabajo', () => {
    // Datos simulados de áreas de trabajo
    const mockAreas = [{ id: 1, nombre: 'Área 1' }, { id: 2, nombre: 'Área 2' }];

    // Llamada al servicio para obtener áreas de trabajo
    service.obtenerAreasDeTrabajo().subscribe(areas => {
      expect(areas.length).toBe(2); // Verifica que haya 2 áreas de trabajo
      expect(areas).toEqual(mockAreas);
    });

    // Simula la solicitud HTTP GET
    const req = httpMock.expectOne('http://localhost:3000/area/areas');
    expect(req.request.method).toBe('GET');
    req.flush(mockAreas); 
  });
});
