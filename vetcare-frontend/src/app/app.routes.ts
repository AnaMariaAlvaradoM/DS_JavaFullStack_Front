// import { Routes } from '@angular/router';
// import { Inicio } from './pages/inicio/inicio';
// import { MascotasListado } from './pages/mascotas-listado/mascotas-listado';
// import { MascotaDetalle } from './pages/mascota-detalle/mascota-detalle';

// export const routes: Routes = [
//   { path: '', component: Inicio },
//   { path: 'mascotas', component: MascotasListado },
//   { path: 'mascotas/:id', component: MascotaDetalle }
// ];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/inicio/inicio').then(m => m.Inicio)
  },
  {
    path: 'mascotas',
    loadComponent: () =>
      import('./pages/mascotas-listado/mascotas-listado').then(m => m.MascotasListado)
  },
  {
    path: 'mascotas/:id',
    loadComponent: () =>
      import('./pages/mascota-detalle/mascota-detalle').then(m => m.MascotaDetalle)
  },
  {
    path: 'duenos',
    loadComponent: () =>
      import('./pages/duenos-listado/duenos-listado').then(m => m.DuenosListado)
  }
];