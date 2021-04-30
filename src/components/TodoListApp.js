import React, { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';

const TodoListApp = () => {

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    return (
        <div>
            <h1>Todo List: </h1>
            <Form
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
             />
             <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>
    );
};

export default TodoListApp;