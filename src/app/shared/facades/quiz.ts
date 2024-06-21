export interface QuestionnaireData {
  question: string;
  options: QuizOptions[];
}

export interface QuizOptions {
  optionName: string;
  label: string;
  isCorrect: boolean;
  id: number;
}
