import { Component,OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../todo_list';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() todoInput!: Todo

  todo!: Todo

  constructor(public todoService: TodoService){}

  ngOnInit(): void {
    
  }
  todelete(item: any){
    this.todo = item
    this.todoService.deleteTod(item)
  }
}
