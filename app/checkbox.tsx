import React from 'react'
import { useRouter } from "next/navigation";
async function update(id:any, isDone:any, refresh:any) {
    await fetch(`/api/todo/update`, {
      method: "POST",
      body: JSON.stringify({ id, isDone }),
    });
  
    refresh();
  }
  
const checkbox = ({todo}:any) => {
    const router = useRouter();
  return (
<>
<div className="group">
          <input className="peer hidden"  type="checkbox"
      
      
       id="check"
  
  
  />
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
        </div>
</>
  )
}

export default checkbox