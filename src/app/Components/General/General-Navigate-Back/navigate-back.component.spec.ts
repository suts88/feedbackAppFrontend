import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralNavigateBackComponent } from './general-navigate-back.component';

describe('NavigateBackComponent', () => {
  let component: GeneralNavigateBackComponent;
  let fixture: ComponentFixture<GeneralNavigateBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralNavigateBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralNavigateBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
