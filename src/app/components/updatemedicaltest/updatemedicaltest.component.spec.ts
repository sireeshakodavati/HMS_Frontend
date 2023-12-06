import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemedicaltestComponent } from './updatemedicaltest.component';

describe('UpdatemedicaltestComponent', () => {
  let component: UpdatemedicaltestComponent;
  let fixture: ComponentFixture<UpdatemedicaltestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatemedicaltestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatemedicaltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
