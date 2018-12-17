import { observable, computed, action } from "mobx";
// import SteerableStorage from 'src/utils/steerableStorage';

import TodoModel from "./TodoModel";
// import { getOkrDetail } from '../service';

// const Storage = new SteerableStorage('sessionStorage', 'Todo');

export default class TodoListModel {
    @observable todos = [];

    @computed
    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    @action
    async onMount() {
        const resoult = await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('make a promise function');
                resolve('resolve');
            }, 5000);
        });
        console.log('resolve');
    }

    @action
    async addTodo(title) {
        // const result = await getOkrDetail();
        this.todos.push(new TodoModel(title));
    }

    @action
    async deleteTodo(index) {
        this.todos = this.todos.filter((item, i) => i !== index);
    }
}
