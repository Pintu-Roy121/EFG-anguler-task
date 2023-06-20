import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  product = {
    list: [
      {
        "id": 1,
        "category": "Men's Sneaker",
        "name": "ULTRABOOST 22 SHOES",
        "seller": "Addidas",
        "price": 420,
        "stock": 20,
        "ratings": 4,
        "ratingsCount": 3725,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg",
        "shipping": 1,
        "quantity": 0
      },
      {
        "id": 2,
        "category": "Men's Sneaker",
        "name": "LUNAR NEW DNA SHOES",
        "seller": "Addidas",
        "price": 196,
        "stock": 19,
        "ratings": 5,
        "ratingsCount": 4355,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2cee64414e1f4f31baf1ae270099d950_9366/Lunar_New_Year_Ultraboost_DNA_Shoes_Black_GZ6074_01_standard.jpg",
        "shipping": 14,
        "quantity": 0
      },
      {
        "id": 3,
        "category": "Men's Sneaker",
        "name": "SUPERNOVA SHOES",
        "seller": "Addidas",
        "price": 245,
        "stock": 20,
        "ratings": 4,
        "ratingsCount": 3972,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/69cbc73d0cb846889f89acbb011e68cb_9366/Supernova_Shoes_Black_S42722_01_standard.jpg",
        "shipping": 1,
        "quantity": 0
      },
      {
        "id": 4,
        "category": "Men's Sneaker",
        "name": "LITE RACER SHOES",
        "seller": "Addidas",
        "price": 229,
        "stock": 10,
        "ratings": 5,
        "ratingsCount": 1764,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/96a5f085fedf4e678095abad01056711_9366/Lite_Racer_Adapt_3.0_Shoes_Black_FX8802_01_standard.jpg",
        "shipping": 32,
        "quantity": 0
      },
      {
        "id": 5,
        "category": "Men's Sneaker",
        "name": "4DFWD SHOES",
        "seller": "Addidas",
        "price": 287,
        "stock": 11,
        "ratings": 4,
        "ratingsCount": 799,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c5d1994dfd343e28567ad4400dd351d_9366/4DFWD_Shoes_Black_Q46447_01_standard.jpg",
        "shipping": 49,
        "quantity": 0
      },
      {
        "id": 6,
        "category": "Men's Sneaker",
        "name": "KAPTIR 2.0 SHOES",
        "seller": "Addidas",
        "price": 138,
        "stock": 19,
        "ratings": 3,
        "ratingsCount": 4372,
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0846e90b15144861b33dacf500e3cfd1_9366/Kaptir_2.0_Shoes_White_H00276_01_standard.jpg",
        "shipping": 19,
        "quantity": 0
      },
    ]
  }


  constructor(private route: ActivatedRoute, private router: Router) { }


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
    this.router.navigate(['']);

  }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    this.products = localStorage.getItem('products');
    this.allProducts = JSON.parse(this.products)
    this.allList = this.allProducts?.list;

    this.filterProduct = this.allList?.find((product: any) => product.id == this.id)
    if (!this.filterProduct) {
      const confirm = window.confirm('Do you want to Save data to LocalStorage .....')
      if (!confirm) {
        alert('Please Save First For Edit!');
        this.router.navigate(['']);
        return
      }
      localStorage.setItem('products', JSON.stringify(this.product));
      alert('Data save to Localstroage Successful !');

      this.id = this.route.snapshot.paramMap.get('id');
      this.products = localStorage.getItem('products');
      this.allProducts = JSON.parse(this.products)
      this.allList = this.allProducts?.list;

      this.filterProduct = this.allList?.find((product: any) => product.id == this.id)

    }


  }



}
