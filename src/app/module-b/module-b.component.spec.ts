import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleBComponent } from './module-b.component';

describe('ModuleBComponent', () => {
  let component: ModuleBComponent;
  let fixture: ComponentFixture<ModuleBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
