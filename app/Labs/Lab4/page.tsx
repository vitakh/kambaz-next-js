"use client";
import TodoList from "../Lab4/ReduxExamples/todos/TodoList";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples/page";
import StringStateVariables from "./StringStateVariables";
import store from "./store";
import { Provider } from "react-redux";

export default function Lab4() {
    function sayHello() {
    alert("Hello");
  }
  return (
    <Provider store={store}>
    <div id="wd-lab4">
      <h2>Lab 4</h2>
     <ClickEvent/>
     <PassingDataOnEvent/>
     <PassingFunctions theFunction={sayHello} />
     <EventObject/>
     <Counter/>
     <BooleanStateVariables/>
     <StringStateVariables/>
     <DateStateVariable/>
     <ObjectStateVariable/>
     <ArrayStateVariable/>
     <ParentStateComponent/>
     <ReduxExamples/>
     <TodoList/>
    </div>
</Provider>
  );
}
