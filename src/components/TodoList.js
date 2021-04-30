import React from 'react';

const TodoList = ({todos, setTodos, setEditTodo}) => {

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            })
        )
    }

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    } 

    return (
        <div>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input type="text" value={todo.title} onChange={(e) => e.preventDefault()}/>

                    <button onClick={() => handleComplete(todo)}>Valider</button>
                    <button onClick={() => handleEdit(todo)}>Modifier</button>
                    <button onClick={() => handleDelete(todo)}>Supprimer</button>
                </li>
            ))}
        </div>
    );
};

export default TodoList;