import {Book} from './book';

export interface Lesson {
  id?: number;

  name?: string;

  fileVocabularyAudio?: string;

  book?: Book;
}
