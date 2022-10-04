import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SearchByKeyComponent } from './search-by-key/search-by-key.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { VocabularyCardComponent } from './vocabulary-card/vocabulary-card.component';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import { DisplayVocabularyComponent } from './display-vocabulary/display-vocabulary.component';
import { VocabularyListComponent } from './vocabulary-list/vocabulary-list.component';
import { BookLessonBannerComponent } from './book-lesson-banner/book-lesson-banner.component';
import { SearchByKey1Component } from './search-by-key1/search-by-key1.component';
import { ExcerciseListComponent } from './excercise-list/excercise-list.component';


@NgModule({
  declarations: [HomeComponent, SearchByKeyComponent, NavbarHomeComponent, VocabularyCardComponent, SidebarUserComponent, DisplayVocabularyComponent, VocabularyListComponent, BookLessonBannerComponent, SearchByKey1Component, ExcerciseListComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class UserModule { }
