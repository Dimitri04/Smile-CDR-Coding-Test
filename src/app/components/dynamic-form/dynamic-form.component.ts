import { Component, OnInit, Input } from '@angular/core';

import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../../question-base';
import { QuestionControlService } from '../../services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad :{ [key: string]: any[] } = {};
  showAnswers: boolean = false;
  showErr: boolean = true;
  showSuccess: boolean = false;
  answers: any = [];
  submitted = false;

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    if (this.form.valid) {
      this.showSuccess = true;
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
        this.payLoad = this.form.getRawValue();

      this.answers = Object.keys(this.payLoad).map((key) => {
          return this.payLoad[key];
      });
      this.showErr = false;
      this.showAnswers = true;

    } else {
      this.showErr = true;
    }
  }
}
