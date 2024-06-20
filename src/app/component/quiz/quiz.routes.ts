import { Routes } from '@angular/router';

export const quizRoutes: Routes = [
  {
    path: '',
    redirectTo: 'instructions',
    pathMatch: 'full',
  },
  {
    path: 'instructions',
    loadComponent: () => import('./instructions/instructions.component'),
  },
  {
    path: 'start',
    loadComponent: () => import('./quiz-start/quiz-start.component'),
  },
];
