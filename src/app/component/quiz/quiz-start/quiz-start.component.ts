import { Component, OnDestroy, OnInit, input } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Subscription, interval, take } from 'rxjs';
import { QuestionnaireData, QuizOptions } from '../../../shared/facades';
import { NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-start',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './quiz-start.component.html',
  styleUrl: './quiz-start.component.scss',
})
export default class QuizStartComponent implements OnInit, OnDestroy {
  allQuestions = input<QuestionnaireData[]>([]);
  currentQuestion = 0;
  answerControl = new FormControl<any>(null, Validators.required);
  duration = 10;
  timeLeft = this.duration;
  private timerSubscription!: Subscription;
  constructor(private quizService: QuizService, private router: Router) {}
  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.startTimer();
  }

  public nextQuestion(): void {
    if (this.timeLeft > 0 && this.answerControl.invalid) {
      return;
    }
    if (this.timeLeft > 0) {
      this.quizService.setAnswer(this.answerControl.value);
      this.answerControl?.reset();
    }
    if (this.currentQuestion < this.allQuestions()?.length - 1) {
      this.currentQuestion++;
      this.startTimer();
    } else {
      this.router.navigate(['../result']);
    }
  }

  public selectAnswer(option: QuizOptions) {
    this.answerControl.setValue(option);
  }

  private startTimer() {
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
