export interface QuestionnaireData {
  question: string;
  correctAnswer: number;
  options: QuizOptions[];
}

export interface QuizOptions {
  optionName: string;
  label: string;
  isCorrect: boolean;
  id: number;
}
