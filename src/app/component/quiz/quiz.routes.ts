import { Routes } from '@angular/router';
import { pageDataResolver } from '../../shared/resolvers/page-data.resolver';

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
    resolve: {
      allQuestions: pageDataResolver(
        '/assets/questionnaire.json',
        false,
        '/instructions'
      ),
    },
  },
  {
    path: 'result',
    loadComponent: () => import('./result/result.component'),
  },
];
