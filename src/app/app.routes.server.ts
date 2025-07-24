import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'create',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'edit/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'delete/:id',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];