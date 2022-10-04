import {Book} from './book';

export interface Lesson {
  id?: number;

  name?: string;

  book?: Book;
}
