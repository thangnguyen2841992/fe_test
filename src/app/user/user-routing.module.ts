import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {environment} from '../../environments/environment';
import {SearchByKeyComponent} from './search-by-key/search-by-key.component';
import {VocabularyListComponent} from './vocabulary-list/vocabulary-list.component';
import {SearchByKey1Component} from './search-by-key1/search-by-key1.component';
import {ExcerciseListComponent} from './excercise-list/excercise-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search/:key',
    component: SearchByKeyComponent
  },
  {
    path: 'search1/:key',
    component: SearchByKey1Component
  },
  {
    path: 'vocabulary/list/:bookId/:lessonId',
    component: VocabularyListComponent
  },
  {
    path: 'excercise/list/:bookId/:lessonId',
    component: ExcerciseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
