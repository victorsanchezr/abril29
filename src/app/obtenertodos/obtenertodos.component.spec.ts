import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenertodosComponent } from './obtenertodos.component';

describe('ObtenertodosComponent', () => {
  let component: ObtenertodosComponent;
  let fixture: ComponentFixture<ObtenertodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObtenertodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObtenertodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
