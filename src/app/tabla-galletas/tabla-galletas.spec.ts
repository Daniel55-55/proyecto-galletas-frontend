import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaGalletas } from './tabla-galletas';

describe('TablaGalletas', () => {
  let component: TablaGalletas;
  let fixture: ComponentFixture<TablaGalletas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaGalletas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaGalletas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
