import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
  {
    path: 'quiz',
    loadChildren: () =>
      import('./component/quiz/quiz.routes').then((m) => m.quizRoutes),
  },
  {
    path: 'error',
    loadComponent: () => import('./component/error/error.component'),
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];
