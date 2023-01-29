"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name:any, refresh:any) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  refresh();

}


export default function AddNewTodo({textvalue}:any) {
  const router = useRouter();
  let [name, setName] = useState("");
const [val,setVal] = useState('')
  const onchangeHandler = (e:any) =>{
    console.log(e)
    setVal(e.target.value)
  }
  return (

    <div>
      
      <input
        type="text"
        onChange={onchangeHandler}
        value={val}
        className="rounded w-96 p-1 outline-none m-5"
         
      />

      <button
        onClick={async () => {
          await addTodo(name, router.refresh);
          setName("");
        }}
        disabled={!name}
        className="cursor-pointer bg-purple-900 rounded outline-none text-white p-1 w-24 hover:text-gray-300 dark:bg-slate-50 dark:text-black"
      >
        Add
      </button>
    </div>
  );
}