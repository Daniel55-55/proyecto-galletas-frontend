import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalletasVainilla } from './galletas-vainilla';

describe('GalletasVainilla', () => {
  let component: GalletasVainilla;
  let fixture: ComponentFixture<GalletasVainilla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalletasVainilla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalletasVainilla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
