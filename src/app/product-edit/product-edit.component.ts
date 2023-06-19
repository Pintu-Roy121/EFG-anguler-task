import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
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
    // console.log(this.filterProduct);
  }

  onSubmit(event: Event): void {
    // event.preventDefault();
    event.preventDefault()
    console.log(event.target);
  }
}
