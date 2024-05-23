import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DonateCarPageComponent} from "./donate-car-page.component";

const routes: Routes = [
  {
    path: '',
    component: DonateCarPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonateCarPageRoutingModule { }
