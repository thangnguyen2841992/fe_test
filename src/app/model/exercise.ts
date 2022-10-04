import {User} from './user';
import {Book} from './book';
import {Lesson} from './lesson';

export interface Exercise {
  id?: number;

  name?: string;

  caption?: string;

  audioFile?: string;

  user?: User;

  book?: Book;

  lesson?: Lesson;
}
