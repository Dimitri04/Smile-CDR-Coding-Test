import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Added
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Added
import { DynamicFormComponent } from '../../src/app/components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from '../../src/app/components/dynamic-form-question/dynamic-form-question.component';



@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
