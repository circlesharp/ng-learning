import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInFormValidationComponent } from './built-in-form-validation.component';

describe('BuiltInFormValidationComponent', () => {
  let component: BuiltInFormValidationComponent;
  let fixture: ComponentFixture<BuiltInFormValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltInFormValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltInFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
