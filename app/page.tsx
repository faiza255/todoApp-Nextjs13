
import AddTodo from './add-new-todo'
import TodoList from './todo-list'
import '../styles/globals.css'
import ThemeToggleButton from './ThemeToggleButton'
export default function page() {

  return (
<div>
<div className='p-10'>
<ThemeToggleButton/>
</div>
<div className="container w-50 mx-auto flex flex-col items-center justify-center">

 {/* @ts-expect-error Server Component */}
<TodoList />
</div>
</div>

  )
}
