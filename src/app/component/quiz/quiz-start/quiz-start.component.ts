import { Component, OnInit } from '@angular/core';
import { QuizApiService } from '../quiz-api.service';
import { Observable } from 'rxjs';
import { ApiResponse, QuestionnaireData } from '../../../shared/facades';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-quiz-start',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './quiz-start.component.html',
  styleUrl: './quiz-start.component.scss',
})
export default class QuizStartComponent implements OnInit {
  quizData: Observable<ApiResponse<QuestionnaireData[]>> | undefined;
  constructor(private quizApiService: QuizApiService) {}

  ngOnInit(): void {
    this.getQuizData();
  }

  private getQuizData() {
    this.quizData = this.quizApiService.getTestimonials();
  }
}
