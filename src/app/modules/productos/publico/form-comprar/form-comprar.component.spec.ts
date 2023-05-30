import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComprarComponent } from './form-comprar.component';

describe('FormComprarComponent', () => {
  let component: FormComprarComponent;
  let fixture: ComponentFixture<FormComprarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComprarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
