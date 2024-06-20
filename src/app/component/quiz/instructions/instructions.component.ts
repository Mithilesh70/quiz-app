import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { instructionsLabel } from '../../../shared/labels/quiz-label';

@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './instructions.component.html',
  styleUrl: './instructions.component.scss',
})
export default class InstructionsComponent {
  allLabels = instructionsLabel;
}
