import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    children: [
      // Paso 4: rutas hijas DENTRO de home. URL final: /home/consejo
      {
        path: 'consejo',
        loadComponent: () =>
          import('./home/consejo/consejo.page').then((m) => m.ConsejoPage),
      },
    ],
  },
  {
    path: 'acerca',
    loadComponent: () => import('./acerca/acerca.page').then((m) => m.AcercaPage),
  },
];
