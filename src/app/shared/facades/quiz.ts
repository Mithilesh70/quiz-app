export interface QuestionnaireData {
  question: string;
  isSingleSelect: boolean;
  correctAnswer: number;
  options: QuizOptions[];
}

export interface QuizOptions {
  optionName: string;
  label: string;
  id: number;
}
