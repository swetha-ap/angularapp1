import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacedbarComponent } from './placedbar.component';

describe('PlacedbarComponent', () => {
  let component: PlacedbarComponent;
  let fixture: ComponentFixture<PlacedbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacedbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacedbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
