import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddedComponent } from './popup-added.component';

describe('PopupAddedComponent', () => {
  let component: PopupAddedComponent;
  let fixture: ComponentFixture<PopupAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupAddedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
