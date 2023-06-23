import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {path:'adding', component:AddComponent},
  {path:'list',component:TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
