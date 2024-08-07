import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneArticletComponent } from './one-articlet.component';

describe('OneArticletComponent', () => {
  let component: OneArticletComponent;
  let fixture: ComponentFixture<OneArticletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneArticletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneArticletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
