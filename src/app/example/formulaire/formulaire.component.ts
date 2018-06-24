import {Component, Injectable, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms' ;
import {ProduitServiceService} from "../../produit-service.service";
import {Product} from "../../shared/models/product";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

@Injectable()
export class FormulaireComponent implements OnInit {

  product: Product = new Product();

  constructor(private produit_service: ProduitServiceService) {
  }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    // const test = JSON.stringify(form.value);
   // console.log(test) ;

    this.product.label = form.value['label'] ;
    this.product.prix = form.value['prix'] ;
    this.product.quantite = form.value['quantite'] ;

    this.produit_service.addProduit(JSON.stringify(this.product))
      .subscribe(
      () => alert("produit crée"),
      () => alert("erreur"),
    );
  }

}

