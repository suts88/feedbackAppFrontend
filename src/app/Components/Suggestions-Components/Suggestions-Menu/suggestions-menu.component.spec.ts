import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsMenuComponent } from './suggestions-menu.component';

describe('SuggestionsMenuComponent', () => {
  let component: SuggestionsMenuComponent;
  let fixture: ComponentFixture<SuggestionsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestionsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
