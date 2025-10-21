/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

import { useSelector } from "react-redux";
import { addTodo, deleteTodo, setTodo, updateTodo } from "./todosReducer";

// export default function TodoList() {
//   const { todos } = useSelector((state: any) => state.todosReducer);
//   const todo = todos[0];
//   return (
//     <div id="wd-todo-list-redux">
//       <h2>Todo List</h2>
//       <ListGroup>
//         <TodoForm todo={todo} setTodo={setTodo} addTodo={addTodo} updateTodo={updateTodo}/>
//         {todos.map((todo: any) => (
//           <TodoItem todo={todo} deleteTodo={deleteTodo} setTodo={setTodo}/>
//         ))}
//       </ListGroup>
//       <hr/>
//     </div>
// );}
export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
      </ListGroup>
      <hr/>
    </div>
);}


