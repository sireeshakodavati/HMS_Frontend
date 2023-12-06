import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallpatientComponent } from './getallpatient.component';

describe('GetallpatientComponent', () => {
  let component: GetallpatientComponent;
  let fixture: ComponentFixture<GetallpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetallpatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
