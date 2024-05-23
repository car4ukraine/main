
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
		path: ':lang',
		loadChildren: () => import('../pages/home-page/home-page.module').then(m => m.HomePageModule)
	},
	{
		path: ':lang/about',
		loadChildren: () => import('../pages/about-page/about-page.module').then(m => m.AboutPageModule)
	},
	{
		path: ':lang/donate',
		loadChildren: () => import('../pages/donate-page/donate-page.module').then(m => m.DonatePageModule)
	},
	{
		path: ':lang/donate-car',
		loadChildren: () => import('../pages/donate-car-page/donate-car-page.module').then(m => m.DonateCarPageModule)
	},
	{
		path: ':lang/contact',
		loadChildren: () => import('../pages/contact-page/contact-page.module').then(m => m.ContactPageModule)
	},
	{
		path: ':lang/faq',
		loadChildren: () => import('../pages/faq-page/faq-page.module').then(m => m.FaqPageModule)
	},
	{
		path: ':lang/thankyou',
		loadChildren: () => import('../pages/thank-you-page/thank-you-page.module').then(m => m.ThankYouPageModule)
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