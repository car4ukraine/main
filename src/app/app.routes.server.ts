import {RenderMode, ServerRoute} from "@angular/ssr";

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'donate',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'donate-car',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'contact',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'faq',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'thankyou',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'languages',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'sitemap',
    renderMode: RenderMode.Prerender,
  },
  // {
  //   path: 'campaigns',
  //   renderMode: RenderMode.Prerender,
  // },
];
