"use client";

import { useRouter } from "next/navigation";
import { FaCheck } from "react-icons/fa";
import '../styles/globals.css'
async function update(id:any, isDone:any, refresh:any) {
  await fetch(`/api/todo/update`, {
    method: "POST",
    body: JSON.stringify({ id, isDone }),
  });

  refresh();
}

async function deleteTodo(id:any, refresh:any) {
  await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });

  refresh();
}

export default function Todo({ todo }:any) {
  const router = useRouter();

  return (
    <>
{/* <div className="group">
          <input className="peer hidden" id="check" type="checkbox" />
          <label
            className="
            peer/label 
            group-hover:bg-[#F2F2F2] 
            group-hover:border-2 
            group-hover:border-solid 
            group-hover:border-[#F2F2F2] 
            flex 
            justify-center 
            items-center 
            peer-checked:bg-[#4DD599] 
            peer-checked:border-2 
            peer-checked:border-solid 
            peer-checked:border-[#4DD599]
            w-5 
            h-5 
            rounded-full 
            border-2 
            border-solid 
            border-[#E8E8E8] 
            cursor-pointer 
            inline-block
            "
            htmlFor="check">
            <svg
              className="
              group-hover:opacity-100
              relative 
              left-[0.5px]
              "
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                className="
                group-hover:stroke-[#b2b2b2] 
                stroke-[#f2f2f2]
                ease-in-out"
                d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                stroke="#000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
        </div> */}
      {/* <input
        type="checkbox"
        onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
        checked={todo.isDone}
        className="m-1 bg-slate-100"
      /> */}


<label className="cursor-pointer relative ml-2 mt-2">
  <FaCheck className="check-1 cursor-pointer absolute ml-1 mt-1"/>
 <input type="checkbox" id='check-box-1'  className="appearance-none h-5 w-5 border-2 rounded border-purple-100 border-2 rounded-3xl  p-3 transition cursor-pointer text-white checked:bg-green-500" 
    onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
    checked={todo.isDone}/>
</label>
 <span className={todo.isDone ? 'line-through text-gray-400 m-1' : 'm-1'}>{todo.name}</span>
      <button onClick={() => deleteTodo(todo.id, router.refresh)}     className="m-1 bg-purple-400 px-2 py-1 hover:text-gray-300 rounded dark:bg-white dark:text-black dark:font-bold">
        Delete
      </button>
  
    </>
  )
}