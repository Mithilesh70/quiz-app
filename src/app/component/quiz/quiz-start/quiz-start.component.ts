import { Component, OnDestroy, OnInit, input } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Subscription, interval, take } from 'rxjs';
import { QuestionnaireData, QuizOptions } from '../../../shared/facades';
import { NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { quizLabel } from '../../../shared/labels/quiz-label';

@Component({
  selector: 'app-quiz-start',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './quiz-start.component.html',
  styleUrl: './quiz-start.component.scss',
})
export default class QuizStartComponent implements OnInit, OnDestroy {
  allLabels = quizLabel;
  allQuestions = input<QuestionnaireData[]>([]);
  currentQuestion = 0;
  answerControl = new FormControl<QuizOptions | null>(
    null,
    Validators.required
  );
  duration = 12;
  timeLeft = this.duration;
  private timerSubscription!: Subscription;
  constructor(
    private quizService: QuizService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.quizService.resetState();
    this.startTimer();
    if (this.allQuestions().length) {
      this.quizService.totalQuestions = this.allQuestions().length;
    }
  }

  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }

  /**
   * using this function to navigate to next question
   * @returns void
   */
  public nextQuestion(): void {
    if (this.timeLeft > 0 && this.answerControl.invalid) {
      this.quizService.showToast('error', 'Please Select at least one option.');
      return;
    }
    if (this.timeLeft > 0 && this.answerControl.value) {
      this.quizService.setAnswer(this.answerControl.value);
      this.answerControl?.reset();
    }
    if (this.currentQuestion < this.allQuestions()?.length - 1) {
      this.currentQuestion++;
      this.startTimer();
    } else {
      this.router.navigate(['../result'], { relativeTo: this.route });
    }
  }

  /**
   * getting the option selected by user
   * @param option
   * @returns void
   */
  public selectAnswer(option: QuizOptions): void {
    this.answerControl.setValue(option);
  }

  /**
   * starting timer for each question
   * @returns void
   */
  private startTimer(): void {
    this.timerSubscription?.unsubscribe();
    this.timerSubscription = interval(1000)
      .pipe(take(this.duration))
      .subscribe({
        next: (value) => {
          this.timeLeft = this.duration - (value + 1);
          if (this.timeLeft === 0) {
            this.nextQuestion();
          }
        },
      });
  }
}
