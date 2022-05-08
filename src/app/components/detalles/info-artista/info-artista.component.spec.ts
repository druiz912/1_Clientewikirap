import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoArtistaComponent } from './info-artista.component';

describe('InfoArtistaComponent', () => {
  let component: InfoArtistaComponent;
  let fixture: ComponentFixture<InfoArtistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoArtistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoArtistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
