import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBindingComponent } from './btn-binding.component';

describe('BtnBindingComponent', () => {
  let component: BtnBindingComponent;
  let fixture: ComponentFixture<BtnBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
