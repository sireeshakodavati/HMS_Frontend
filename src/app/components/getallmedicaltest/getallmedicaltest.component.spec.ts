import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallmedicaltestComponent } from './getallmedicaltest.component';

describe('GetallmedicaltestComponent', () => {
  let component: GetallmedicaltestComponent;
  let fixture: ComponentFixture<GetallmedicaltestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetallmedicaltestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallmedicaltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
