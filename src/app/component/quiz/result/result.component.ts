import { Component } from '@angular/core';
import { QuizService } from '../quiz.service';
import { resultLabel } from '../../../shared/labels/quiz-label';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
})
export default class ResultComponent {
  allLabels = resultLabel;
  correctAnswer = this.quizService.getSelectedAnswers.reduce(
    (correctAns, answer) => {
      if (answer.isCorrect) {
        return correctAns + 1;
      }
      return correctAns;
    },
    0
  );
  attemptedQuestion = this.quizService.getSelectedAnswers.length;
  totalQuestions = this.quizService.totalQuestions;
  constructor(private quizService: QuizService) {}
}
