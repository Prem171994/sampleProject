import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehaviourSubjectComponent } from './behaviour-subject/behaviour-subject.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { DatapassComponent } from './datapass/datapass.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputOutputComponentComponent } from './input-output-component/input-output-component.component';
import { ObservablesComponent } from './observables/observables.component';
import { PipeComponent } from './pipe/pipe.component';
import { PromiseComponent } from './promise/promise.component';
import { TableCreationComponent } from './table-creation/table-creation.component';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  {path:'viewchild',component:ViewChildComponent},
  {path:'tablecreation',component:TableCreationComponent},
  {path:'promise',component:PromiseComponent},
  {path:'pipe',component:PipeComponent},
  {path:'observable',component:ObservablesComponent},
  {path:'inputoutput',component:InputOutputComponentComponent},
  {path:'directives',component:DirectivesComponent},
  {path:'datapass',component:DatapassComponent},
  {path:'child',component:ChildComponentComponent},
  {path:'behaviour',component:BehaviourSubjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
