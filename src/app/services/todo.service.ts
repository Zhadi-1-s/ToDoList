import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr'
import { Todo } from '../todo_list';
@Injectable({
    providedIn: 'root'
})
export class TodoService{
    todoList = [] = [
        {
            id:1,
            title: 'the First TOdo',
        },
        {
            id:2,
            title:'second Todo',
        }
    ]

    deleteTod(item: any){
        let index =  this.todoList.indexOf(item)
        this.todoList.splice(index,1)
        console.log(index)
    }

    addTodo(title: any){
        let id  = this.todoList.length + 1;

        const item: Todo = {
            id:id,
            title: title,
        }
        this.todoList.unshift(item)
    }
}