
import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('../pages/home-page/home-page.component')
	},
	{
		path: 'about',
    loadComponent: () => import('../pages/about-page/about-page.component')
	},
	{
		path: 'donate',
    loadComponent: () => import('../pages/donate-page/donate-page.component')
	},
	{
		path: 'donate-car',
    loadComponent: () => import('../pages/donate-car-page/donate-car-page.component')
	},
	{
		path: 'contact',
    loadComponent: () => import('../pages/contact-page/contact-page.component')
	},
	{
		path: 'faq',
    loadComponent: () => import('../pages/faq-page/faq-page.component')
	},
	{
		path: 'thankyou',
    loadComponent: () => import('../pages/thank-you-page/thank-you-page.component')
	},
	{
		path: 'languages',
		loadComponent: () => import('../pages/languages-page/languages.page')
	},
	{
		path: 'sitemap',
		loadComponent: () => import('../pages/sitemap-page/sitemap.page')
	},
	// {
	// 	path: '**',
	// 	redirectTo: '',
	// },
	// {
	// 	path: '',
	// 	redirectTo: '',
	// 	pathMatch: 'full'
	// }
];
