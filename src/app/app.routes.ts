import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('../pages/home-page/home-page.module').then(m => m.HomePageModule)
	},
	{
		path: 'about',
		loadChildren: () => import('../pages/about-page/about-page.module').then(m => m.AboutPageModule)
	},
	{
		path: 'donate-car',
		loadChildren: () => import('../pages/donate-car-page/donate-car-page.module').then(m => m.DonateCarPageModule)
	},
	{
		path: 'faq',
		loadChildren: () => import('../pages/faq-page/faq-page.module').then(m => m.FaqPageModule)
	},
	{
		path: 'contact',
		loadChildren: () => import('../pages/contact-page/contact-page.module').then(m => m.ContactPageModule)
	},
];

@NgModule({
  imports: [RouterModule.forRoot([...routes, {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }], {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
