import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { instructionsLabel } from '../../../shared/labels/quiz-label';
import { QuizService, allQuizSteps } from '../quiz.service';

@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.scss',
})
export default class InstructionsComponent {
  allLabels = instructionsLabel;
  quizSteps = allQuizSteps;
  instructionsData: string[] = [
    'All the questions are mandatory.',
    'Once quiz has started leaving the page will result in ending of quiz.',
    'Each question is to answered in 60 seconds.',
    'Once the timer expires for a question you will be redirected to next question and after the timer expires for last question quiz will be submitted automatically.',
    `Note: For testing purposes, all the correct answers are kept in option 'a'.`,
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private quizService: QuizService
  ) {}

  startQuiz(): void {
    this.quizService.currentQuizStep.set(this.quizSteps.quizStarted);
    this.router.navigate(['../start'], { relativeTo: this.route });
  }
}
