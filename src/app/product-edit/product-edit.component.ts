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
  remainProduct: any;

  constructor(private route: ActivatedRoute) { }

  getValues(value: any) {

    this.id = this.route.snapshot.paramMap.get('id');
    this.products = localStorage.getItem('products');
    this.allProducts = JSON.parse(this.products)
    this.allList = this.allProducts?.list;
    this.filterProduct = this.allList?.find((product: any) => product.id == this.id)

    this.remainProduct = this.allList?.filter((product: any) => product.id != this.id)

    const product = {
      "id": parseInt(this.id),
      "category": value?.category ? value?.category : this.filterProduct?.category,
      "name": value?.name ? value?.name : this.filterProduct?.name,
      "seller": value?.seller ? value?.seller : this.filterProduct?.seller,
      "price": value?.price ? value?.price : this.filterProduct?.price,
      "stock": value?.stock ? value?.stock : this.filterProduct?.stock,
      "ratings": this.filterProduct?.ratings,
      "ratingsCount": this.filterProduct?.ratingsCount,
      "img": value?.image ? value?.image : this.filterProduct?.img,
      "shipping": this.filterProduct?.shipping,
      "quantity": this.filterProduct?.quantity
    }

    const allPproduct = { list: [product, ...this.remainProduct] }
    localStorage.setItem('products', JSON.stringify(allPproduct))

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.products = localStorage.getItem('products');
    this.allProducts = JSON.parse(this.products)
    this.allList = this.allProducts?.list;

    this.filterProduct = this.allList?.find((product: any) => product.id == this.id)
    // console.log(this.filterProduct);


  }



}
