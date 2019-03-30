import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubproductsDataComponent } from './subproducts-data.component';

describe('SubproductsDataComponent', () => {
  let component: SubproductsDataComponent;
  let fixture: ComponentFixture<SubproductsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubproductsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubproductsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
