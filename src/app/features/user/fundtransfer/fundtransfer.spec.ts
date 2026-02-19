import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fundtransfer } from './fundtransfer';

describe('Fundtransfer', () => {
  let component: Fundtransfer;
  let fixture: ComponentFixture<Fundtransfer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fundtransfer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fundtransfer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
