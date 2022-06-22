import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsAddTabComponent } from './suggestions-add-tab.component';

describe('SuggestionsAddTabComponent', () => {
  let component: SuggestionsAddTabComponent;
  let fixture: ComponentFixture<SuggestionsAddTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsAddTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestionsAddTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
