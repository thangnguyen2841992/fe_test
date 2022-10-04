import {Question} from './question';

export interface ExcerciseDto {
  id?: number;

 name?: string;

  caption?: string;

  audioFile?: string;

  questions?: Question[];
}
