import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDiscosComponent } from './info-discos.component';

describe('InfoDiscosComponent', () => {
  let component: InfoDiscosComponent;
  let fixture: ComponentFixture<InfoDiscosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDiscosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDiscosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
