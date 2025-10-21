/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button, FormControl, ListGroupItem, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { UnknownAction } from "redux";

// export default function TodoForm({todo, setTodo, addTodo, updateTodo}: {
//     todo: { id: string; title: string };
//     setTodo: (todo: { id: string; title: string }) => void;
//     addTodo: (todo: { id: string; title: string }) => void;
//     updateTodo: (todo: { id: string; title: string }) => void; }) {
// //const { todo } = useSelector((state: any) => state.todosReducer);
//   const dispatch = useDispatch();
//   return (
//     <ListGroupItem>
//       <Button onClick={() => dispatch(addTodo(todo) as unknown as UnknownAction)}
//               id="wd-add-todo-click"> Add </Button>
//       <Button onClick={() => dispatch(updateTodo(todo) as unknown as UnknownAction)}
//               id="wd-update-todo-click"> Update </Button>
//       <FormControl value={todo.title}
//         onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value }) as unknown as UnknownAction) }/>
//     </ListGroupItem>
// );}

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroupItem className="d-flex">
      <FormControl
        defaultValue={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
      <Button variant="warning" className="ms-4" onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click"> Update </Button>
    <Button variant="success" className="ms-2" onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click"> Add </Button>
    </ListGroupItem>
);}

