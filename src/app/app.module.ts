import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipeComponent } from './pipe/pipe.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { PromiseComponent } from './promise/promise.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { SampleviewChildComponent } from './view-child/sampleview-child/sampleview-child.component';
import {MatRadioModule} from '@angular/material/radio';
import { TableCreationComponent } from './table-creation/table-creation.component';
import {MatTableModule} from '@angular/material/table';
import { InputOutputComponentComponent } from './input-output-component/input-output-component.component';
import { ChildInputoutputComponentComponent } from './input-output-component/child-inputoutput-component/child-inputoutput-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { DirectivesComponent } from './directives/directives.component';
import { DatapassComponent } from './datapass/datapass.component';
import { PopupComponentComponent } from './datapass/popup-component/popup-component.component';
import { FilterPipeService } from './pipe/filter-pipe.pipe';
import { ObservablesComponent } from './observables/observables.component';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { Behaviour1Component } from './behaviour1/behaviour1.component';
import { Behaviour2Component } from './behaviour2/behaviour2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    PipeComponent,
    ViewChildComponent,
    PromiseComponent,
    SampleviewChildComponent,
    TableCreationComponent,
    InputOutputComponentComponent,
    ChildInputoutputComponentComponent,
    DirectivesComponent,
    DatapassComponent,
    PopupComponentComponent,
    FilterPipeService,
    ObservablesComponent,
    BehaviourSubjectComponent,
    Behaviour1Component,
    Behaviour2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
