import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerHomepageComponent } from './cust-homepage.component';

describe('HomepageComponent', () => {
  let component: CustomerHomepageComponent;
  let fixture: ComponentFixture<CustomerHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
