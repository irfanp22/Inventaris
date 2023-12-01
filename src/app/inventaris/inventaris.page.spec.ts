import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { InventarisPage } from './inventaris.page';

describe('InventarisPage', () => {
  let component: InventarisPage;
  let fixture: ComponentFixture<InventarisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InventarisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
