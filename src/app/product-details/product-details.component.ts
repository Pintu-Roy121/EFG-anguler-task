import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
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
