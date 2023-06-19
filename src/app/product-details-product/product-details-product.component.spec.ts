import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsProductComponent } from './product-details-product.component';

describe('ProductDetailsProductComponent', () => {
  let component: ProductDetailsProductComponent;
  let fixture: ComponentFixture<ProductDetailsProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsProductComponent]
    });
    fixture = TestBed.createComponent(ProductDetailsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
