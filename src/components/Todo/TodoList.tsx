// Very simple and rudimentar todo component for a simple unit testing on the front end workshop (101)

import React, { useState, useRef } from 'react'

import styles from './TodoList.module.scss' ;

interface ITodoItemProps {
    itemText: string;
    onRemove: (itemText: string) => void;
}

const TodoItem: React.FC<ITodoItemProps> = props => {
    return (
        <li>
            <span>{props.itemText}</span><a href="#" onClick={() => props.onRemove(props.itemText)}> (Remove)</a>
        </li>
    );
};

const TodoList: React.FC = () => {
    const [newTaskText, setNewTaskText] = useState<string>('');
    const [todoItems, setTodoItems] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const addTodoItem = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (inputRef.current)
        {
            const itemText = inputRef.current.value;

            if (itemText.trim().length > 0 && todoItems.findIndex(t => t === itemText) < 0)
            {
                setTodoItems([...todoItems, itemText]);
            }

            setNewTaskText('');
        }
    }

    const removeTodoItem = (itemText: string) => {
        const indexToRemove = todoItems.findIndex(t => t === itemText);

        if (indexToRemove >= 0)
            setTodoItems([...todoItems.slice(0, indexToRemove), ...todoItems.slice(indexToRemove + 1)]);
    }

    const newTaskTextUpdated = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTaskText(event.target.value);
    }

    return (
        <div className={styles["todo-list"]}>
            <div className={styles["todo-list-header"]}>
                <form onSubmit={addTodoItem}>
                    <input 
                        type="text" 
                        placeholder="Enter your Task" 
                        ref={inputRef} 
                        required
                        onChange={newTaskTextUpdated}
                        value={newTaskText}
                    />
                    <button type="submit">Add Task</button>
                </form>
            </div>
            <ul className={styles["todo-list-items"]}>
                {todoItems.map((item, index) => {
                    return <TodoItem key={index} itemText={item} onRemove={removeTodoItem} />
                })}
            </ul>
        </div>
    );
};

export default TodoList

