import {NgModule} from '@angular/core';
import {ListComponent} from './list/list.component';
import {FormulaireComponent} from './formulaire/formulaire.component';
import {SharedModule} from "../shared/shared.module";
import {ExampleRouting} from "./example.routing";
import {ProductsComponent} from "./products/products.component";
import {ProductComponent} from "./product/product.component";

@NgModule({
  imports: [
    ExampleRouting,
    SharedModule
  ],
  declarations: [ListComponent, FormulaireComponent, ProductsComponent, ProductComponent]
})
export class ExampleModule {
}
