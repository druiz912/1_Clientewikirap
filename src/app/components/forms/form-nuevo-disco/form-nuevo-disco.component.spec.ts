import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevoDiscoComponent } from './form-nuevo-disco.component';

describe('FormNuevoDiscoComponent', () => {
  let component: FormNuevoDiscoComponent;
  let fixture: ComponentFixture<FormNuevoDiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuevoDiscoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNuevoDiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
