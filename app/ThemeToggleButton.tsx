'use client'
import React,{useEffect, useState} from 'react'
import {FaSun,FaMoon} from 'react-icons/fa'
type ThemeType = 'dark' | 'light';
const ThemeToggleButton:React.FC = () => {
  const [theme,setTheme] = useState<ThemeType>(() => {
    if(typeof localStorage === undefined && localStorage.getItem('theme')){
      return localStorage.getItem('theme') as any
    }
    if(typeof window === undefined && window.matchMedia('(prefers-colors-scheme:dark)').matches){
      return 'dark'
    }
    return 'light'
  })

const toggleTheme = () =>{
  const t = theme === 'light' ? 'dark' :'light'
  localStorage.setItem('theme',t)
  setTheme(t)
}

useEffect(()=>{
const root = document.documentElement
if(theme === 'light'){
  root.classList.remove('dark')
}
else{
  root.classList.add('dark')
}
},[theme])
  return (
<button title='Theme Toggle' className='grid place-items-center w-10 h-10 rounded-full bg-purple-800 dark:bg-gray-600 transition duration-700 ease-in-out' onClick={toggleTheme}>

{theme === 'light' ? <FaSun className='text-yellow-400 transition duration-700 ease-in-out'/> : <FaMoon className='text-yellow-400 transition duration-700 ease-in-out'/>}
</button> 
  )
}

export default ThemeToggleButton