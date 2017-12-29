// or you can call this file "repository", but in general sense it's service
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DatabaseService {
  
    constructor(
        private fireDatabase: AngularFireDatabase
    ) {}
  
    getChapterExams() {
      return this.fireDatabase
        .database
        .ref('chapter_exams')
        .once('value')
        .catch(err => {
            console.log('Something went wrong:',err.message);
        });
    }

    getCourseExams() {
      return this.fireDatabase
        .database
        .ref('course_exams')
        .once('value')
        .catch(err => {
            console.log('Something went wrong:',err.message);
        });
    }

    getQuestions() {
      return this.fireDatabase
        .database
        .ref('questions')
        .once('value')
        .catch(err => {
            console.log('Something went wrong:',err.message);
        });
    }

    addCourseExam(exam) {
      return this.fireDatabase
        .database
        .ref('course_exams')
        .push(exam)
    }

    addChapterExam(exam) {
      return this.fireDatabase
        .database
        .ref('chapter_exams')
        .push(exam)
    }
  
  }