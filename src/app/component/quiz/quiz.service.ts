import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizOptions } from '../../shared/facades';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private selectedAnswers: QuizOptions[] = [];
  constructor() {}

  get getSelectedAnswers(): QuizOptions[] {
    return this.selectedAnswers;
  }

  public setAnswer(ans: QuizOptions): void {
    this.selectedAnswers.push(ans);
  }
}
