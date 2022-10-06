import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddVocabularyComponent } from './add-vocabulary/add-vocabulary.component';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import { GrammarCreateComponent } from './grammar-create/grammar-create.component';
import { ExcerciseCreateComponent } from './excercise-create/excercise-create.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment.prod';
import {AngularFireStorage} from '@angular/fire/storage';
import { BookCreateComponent } from './book-create/book-create.component';


@NgModule({
  declarations: [AddVocabularyComponent, GrammarCreateComponent, ExcerciseCreateComponent, BookCreateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    AngularFireStorage
  ],
})
export class AdminModule { }
