import React, { Component } from "react";
import { observer } from "mobx-react";
import Checkbox from 'antd/lib/checkbox';

const Todo = observer(({ todo }) => (
    <Checkbox
        type="checkbox"
        checked={todo.finished}
        onClick={() => { todo.finished = !todo.finished; } }
    >
        {todo.title}
    </Checkbox>
));

export default Todo;
