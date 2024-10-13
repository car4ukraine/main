
import { Routes } from '@angular/router';

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
		path: 'donate',
		loadChildren: () => import('../pages/donate-page/donate-page.module').then(m => m.DonatePageModule)
	},
	{
		path: 'donate-car',
		loadChildren: () => import('../pages/donate-car-page/donate-car-page.module').then(m => m.DonateCarPageModule)
	},
	{
		path: 'contact',
		loadChildren: () => import('../pages/contact-page/contact-page.module').then(m => m.ContactPageModule)
	},
	{
		path: 'faq',
		loadChildren: () => import('../pages/faq-page/faq-page.module').then(m => m.FaqPageModule)
	},
	{
		path: 'thankyou',
		loadChildren: () => import('../pages/thank-you-page/thank-you-page.module').then(m => m.ThankYouPageModule)
	},
	{
		path: 'languages',
		loadComponent: () => import('../pages/languages-page/languages.page')
	},
	{
		path: 'sitemap',
		loadComponent: () => import('../pages/sitemap-page/sitemap.page')
	},
	{
		path: '**',
		redirectTo: '',
	},
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full'
	}
];
