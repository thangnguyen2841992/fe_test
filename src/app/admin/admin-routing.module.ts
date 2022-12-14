import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddVocabularyComponent} from './add-vocabulary/add-vocabulary.component';
import {ExcerciseCreateComponent} from './excercise-create/excercise-create.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {TestCreateComponent} from './test-create/test-create.component';
import {TestListComponent} from './test-list/test-list.component';
import {TestEditComponent} from './test-edit/test-edit.component';
import {TestDetailsComponent} from './test-details/test-details.component';
import {VocabularyAudioFileAddComponent} from './vocabulary-audio-file-add/vocabulary-audio-file-add.component';


const routes: Routes = [
  {
    path: 'vocabulary/add',
    component: AddVocabularyComponent
  },
  {
    path: 'exercise/create',
    component: ExcerciseCreateComponent
  },
  {
    path: 'book/create',
    component: BookCreateComponent
  },
  {
    path: 'test/create',
    component: TestCreateComponent
  },
  {
    path: 'test/list',
    component: TestListComponent
  },
  {
    path: 'test/edit/:testId',
    component: TestEditComponent
  },
  {
    path: 'test/details/:testId',
    component: TestDetailsComponent
  },
  {
    path: 'vocabularyAudioFile/add',
    component: VocabularyAudioFileAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
