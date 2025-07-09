import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './assets/components/UseState'
import BGColor from './assets/components/BGColor'
import UseEffect from './assets/components/UseEffect'
import Timer from './assets/components/Timer'
import StopWatch from './assets/components/StopWatch'
import TodoList from './assets/components/TodoList'

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    
     <div>
       <TodoList />
        
        {/* <button
        onClick={()=> setShowTimer(!showTimer)}
          className = 'bg-blue-600 text-white px-4 py-2 rounded'
          >
            {showTimer ? "stop timer":"start timer"}
        </button>
        {showTimer && <Timer/>} */}
     </div>
    

    
  )
}
export default App
