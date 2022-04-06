import { Injectable } from '@angular/core';

import { DropdownQuestion } from '../question-dropdown';
import { QuestionBase } from '../question-base';
import { TextboxQuestion } from '../question-textbox';
import { RadioQuestion } from '../question-radio';
import { DateQuestion } from '../question-date';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new RadioQuestion({
        key: 'allergies',
        label: 'Do you have allergies?',
        options: [
          {key: 'True',  value: 'True'},
          {key: 'False',  value: 'False'},
        ],
        order: 1
      }),

      new RadioQuestion({
        key: 'gender',
        label: 'What is your gender?',
        options: [
          {key: 'Male',  value: 'Male'},
          {key: 'Female',  value: 'Female'},
          {key: 'Other',  value: 'Other'},
        ],
        order: 2
      }),

      new DateQuestion({
        type: 'date',
        key: 'dob',
        label: 'What is your date of brith?',
        value: '',
        required: true,
        order: 3
      }),

      new TextboxQuestion({
        key: 'cob',
        label: 'What is your country of birth?',
        value: '',
        order: 4,
      }),

      new DropdownQuestion({
        key: 'marital-status',
        label: 'What is your marital status? ',
        options: [
          {key: 'Married',  value: 'Married'},
          {key: 'Single',  value: 'Single'},
          {key: 'Divorced',   value: 'Divorced'},
        ],
        order: 5
      }),

      new RadioQuestion({
        key: 'smoker',
        label: 'Do you smoke?',
        options: [
          {key: 'True',  value: 'True'},
          {key: 'False',  value: 'False'},
        ],
        order: 6
      }),

      new RadioQuestion({
        key: 'drinker',
        label: 'Do you drink alchohol?',
        options: [
          {key: 'True',  value: 'True'},
          {key: 'False',  value: 'False'},
        ],
        order: 7
      }),
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }

  constructor() { }
}
