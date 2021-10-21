import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSideFormValidationComponent } from './client-side-form-validation.component';

describe('ClientSideFormValidationComponent', () => {
  let component: ClientSideFormValidationComponent;
  let fixture: ComponentFixture<ClientSideFormValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSideFormValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSideFormValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
