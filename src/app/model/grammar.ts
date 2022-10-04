import {User} from './user';
import {Book} from './book';
import {Lesson} from './lesson';

export interface Grammar {
  id?: number;

  situatation?: string;

  explain?: string;

  example?: string;

  user?: User;

  book?: Book;

  lesson?: Lesson;
}
