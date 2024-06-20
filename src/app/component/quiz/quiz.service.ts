import { Injectable } from '@angular/core';
import { QuizOptions } from '../../shared/facades';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private selectedAnswers: QuizOptions[] = [];
  public totalQuestions = 0;
  constructor(private toastr: ToastrService) {}

  /**
   * getting selected answers to show score
   */
  get getSelectedAnswers(): QuizOptions[] {
    return this.selectedAnswers;
  }

  /**
   * collecting all the user selected answers
   * @param ans
   */
  public setAnswer(ans: QuizOptions): void {
    this.selectedAnswers.push(ans);
  }

  /**
   * resetting the service state whenever we start quiz again
   */
  public resetState(): void {
    this.selectedAnswers = [];
    this.totalQuestions = 0;
  }

  /**
   * using this common function to show toast messages
   * @param type
   * @param msg
   */
  public showToast(
    type: 'success' | 'error' | 'info' | 'warning',
    msg: string
  ) {
    this.toastr[type](msg);
  }
}
