// Layouts
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ListComponent} from "./list/list.component";
import {FormulaireComponent} from "./formulaire/formulaire.component";
import {ProductsComponent} from "./products/products.component";


export const routes: Routes = [

  {
    path: 'products',
    component: ProductsComponent
  }, {
    path: 'formulaire',
    component: FormulaireComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleRouting {
}
