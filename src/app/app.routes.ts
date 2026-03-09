import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'registrochofer',
    loadComponent: () => import('./registrochofer/registrochofer.page').then( m => m.RegistrochoferPage)
  },
  {
    path: 'registrousuario',
    loadComponent: () => import('./registrousuario/registrousuario.page').then( m => m.RegistrousuarioPage)
  },
  {
    path: 'perfiladministrador',
    loadComponent: () => import('./perfiladministrador/perfiladministrador.page').then( m => m.PerfiladministradorPage)
  },
  {
    path: 'calificacionusuario',
    loadComponent: () => import('./calificacionusuario/calificacionusuario.page').then( m => m.CalificacionusuarioPage)
  },
  {
    path: 'perfilusuario',
    loadComponent: () => import('./perfilusuario/perfilusuario.page').then( m => m.PerfilusuarioPage)
  },
  {
    path: 'historialusuario',
    loadComponent: () => import('./historialusuario/historialusuario.page').then( m => m.HistorialusuarioPage)
  },

];
