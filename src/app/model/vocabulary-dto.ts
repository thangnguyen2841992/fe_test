import {User} from './user';
import {Lesson} from './lesson';
import {Book} from './book';
import {Vocabulary} from './vocabulary';

export interface VocabularyDto {
  user?: User;
  book?: Book;
  lesson?: Lesson;
  vocabulary?: Vocabulary;
  japanese?: string;
  kanji?: string;
  vietnameseChinese: string;
  translation?: string[];
}
