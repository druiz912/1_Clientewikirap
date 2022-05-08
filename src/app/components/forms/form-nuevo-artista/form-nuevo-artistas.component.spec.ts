import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioNuevoArtistaComponent } from './form-nuevo-artistas.component';


describe('FormularioNuevoArtistaComponent', () => {
  let component: FormularioNuevoArtistaComponent;
  let fixture: ComponentFixture<FormularioNuevoArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNuevoArtistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNuevoArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
