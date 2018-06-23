import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";


@Injectable()
export class ProduitServiceService {


  constructor(private http: HttpClient) {
  }

  addProduit(content: string) {
   // const body = JSON.stringify(content);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post("http://localhost/backend/public/api/produit", content, { headers: headers
    });
  }

}
