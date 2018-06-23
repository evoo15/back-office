import {Component, Injectable, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms' ;
import {ProduitServiceService} from "../../produit-service.service";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

@Injectable()
export class FormulaireComponent implements OnInit {

  constructor(private produit_service: ProduitServiceService) {
  }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
   const test = JSON.stringify(form.value);
    console.log(test) ;
    this.produit_service.addProduit(form.value)
      .subscribe(
      () => alert("produit crée"),
      () => alert("erreur"),
    );
  }

}

