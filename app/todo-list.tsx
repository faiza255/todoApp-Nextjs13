
"use client";
import React, { useState } from "react";
import Todo from './todo';
import { FaCheck } from "react-icons/fa";
const getTodos = async () => {
  let todos = await fetch("https://todoapi-sigma.vercel.app/api/todo/list");
  return todos.json();
};
export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "Design a Website UI", completed: false },
    { todoText: "Make Coffee", completed: true },
    { todoText: "Order Pizza at Night", completed: true },
    { todoText: "GO to Shopping", completed: false },
  ]);

  const onClickHandler = (meraElm: any) => {
    console.log("meraElm", meraElm);

    // map runs on array, and returns an array
    const newTodos = todos.map((todo) => {
      console.log("todo: ", todo);
      if (todo.todoText == meraElm.todoText) {
        todo.completed = !todo.completed; // false he to true krdo, true he to false kardo
      }
      return todo;
    });

    console.log(newTodos);
    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (meraTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == meraTodo.todoText) return false;
      return true;
    });
    console.log("old todos", todos, "new todos", newTodos);
    setTodos(newTodos);
  };
  return (
    

<>
      <div className='w-50'>
      <input
        type="text"
        // onChange={onchangeHandler}
        // value={val}
        className="rounded w-96 p-1 outline-none m-5 dark:text-black"
        value={todo}

        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />

      <button
        // onClick={async () => {
        //   // await addTodo(name, router.refresh);
        //   // setName("");
        // }}
        // disabled={!name}
        disabled={!todo}
        onClick={addTodo}
        className="cursor-pointer bg-purple-900 rounded outline-none text-white p-1 w-24 hover:text-gray-300 dark:bg-slate-50 dark:text-black"
      >
        Add
      </button>
      </div>
    <ul style={{ listStyleType: "none", padding: 0 }}>
    {todos.map((elm) => {


        return (
          <li key={elm.todoText} style={{ padding: "5px 0" }} className='bg-purple-900 w-80 mt-5 flex justify-between -ml-24  text-white border-x-purple-500 border-x-8 dark:bg-black/20 dark:border-x-gray-100'>

<label className="cursor-pointer relative ml-2 mt-2">
  <FaCheck className="check-1 cursor-pointer absolute ml-1 mt-1"/>
 <input type="checkbox" id='check-box-1'  className="appearance-none h-5 w-5 border-2 rounded border-purple-100 border-2 rounded-3xl  p-3 transition cursor-pointer text-white checked:bg-green-500" 
    checked={elm.completed}
    onChange={() => {
      onClickHandler(elm);
    }}
 />
</label>
 <span className={elm.completed ? 'line-through text-gray-400 m-1' : 'm-1'}>{elm.todoText}</span>
      <button    onClick={() => {
                  deleteTodo(elm);
                }} className="m-1 bg-purple-400 px-2 py-1 hover:text-gray-300 rounded dark:bg-white dark:text-black dark:font-bold">
                       {"  "}
        Delete
      </button>
          </li>
        );
        
      })}


      
      
    </ul>
</>
  )
}

