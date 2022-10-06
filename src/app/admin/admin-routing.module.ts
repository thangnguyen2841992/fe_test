import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddVocabularyComponent} from './add-vocabulary/add-vocabulary.component';
import {ExcerciseCreateComponent} from './excercise-create/excercise-create.component';
import {BookCreateComponent} from './book-create/book-create.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
