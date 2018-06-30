import { Component, OnInit } from '@angular/core';

import {Product} from "../../shared/models/product";
import {ProduitServiceService} from "../../produit-service.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] ;
  constructor(private  produit_service: ProduitServiceService) { }

  ngOnInit() {
  }

  onGetProducts() {
    this.produit_service.getProducts()
      .subscribe(
        (products: Product[] ) => this.products = products,
        (error: Response) => console.log(error)
      );
  }
  onDeleteProduct(id: number) {
    console.log(id) ;
    this.produit_service.deleteProduct(id).subscribe(
      () => console.log("product deleted" ),
      () => console.log("deletion error")
    ) ;
  }

}
