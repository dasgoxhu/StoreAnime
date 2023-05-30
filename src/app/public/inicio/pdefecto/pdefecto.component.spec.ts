import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdefectoComponent } from './pdefecto.component';

describe('PdefectoComponent', () => {
  let component: PdefectoComponent;
  let fixture: ComponentFixture<PdefectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdefectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdefectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
