import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details-product',
  templateUrl: './product-details-product.component.html',
  styleUrls: ['./product-details-product.component.css']
})
export class ProductDetailsProductComponent implements OnInit {
  id: any;
  products: any;
  allProducts: any;
  filterProduct: any;
  allList: any;

  constructor(private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.products = localStorage.getItem('products');
    this.allProducts = JSON.parse(this.products)
    this.allList = this.allProducts?.list;

    this.filterProduct = this.allList?.find((product: any) => product.id == this.id)
    console.log(this.filterProduct);

  }
}
