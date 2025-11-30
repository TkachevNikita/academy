import { Route } from '@angular/router';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'courses',
        loadComponent: async () =>
          import('./pages/courses-page/courses-page.component').then(
            (c) => c.CoursesPageComponent,
          ),
      },
      {
        path: 'professions',
        loadComponent: async () =>
          import('./pages/professions-page/professions-page.component').then(
            (c) => c.ProfessionsPageComponent,
          ),
      },
    ],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];
