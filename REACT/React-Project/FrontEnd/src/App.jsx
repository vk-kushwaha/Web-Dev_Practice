import React from 'react'
import AllQuotes from './Components/Pages/AllQuotes'
import NewQuotes from './Components/Pages/NewQuotes'
import MainNav from './Components/MainNav/MainNav'
import { Route, Routes } from 'react-router-dom'
import ShowQuotes from './Components/Pages/ShowQuotes'

function App() {
  return (
    <div>
    <MainNav/> 

    <main>
      <Routes>
      <Route path='/' element={<AllQuotes/>}/>
      <Route path='/new' element={<NewQuotes/>}/>
      <Route path='/quote/:id' element={<ShowQuotes/>}/>

      </Routes>
    </main>

    </div>
  )
}

export default App