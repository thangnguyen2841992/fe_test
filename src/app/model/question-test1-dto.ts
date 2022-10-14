import {QuestionTest} from './question-test';
import {AnswerQuestionTest1} from './answer-question-test1';

export interface QuestionTest1Dto {
  questionTest1Id?: number;

  question?: string;

  correctAnswer?: string;

  questionTest?: QuestionTest;

  answerQuestion1List?: AnswerQuestionTest1[];
}
