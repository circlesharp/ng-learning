import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaScriptFormValidationComponent } from './java-script-form-validation.component';

describe('JavaScriptFormValidationComponent', () => {
  let component: JavaScriptFormValidationComponent;
  let fixture: ComponentFixture<JavaScriptFormValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaScriptFormValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaScriptFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
