import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalletasChocolate } from './galletas-chocolate';

describe('GalletasChocolate', () => {
  let component: GalletasChocolate;
  let fixture: ComponentFixture<GalletasChocolate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalletasChocolate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalletasChocolate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
