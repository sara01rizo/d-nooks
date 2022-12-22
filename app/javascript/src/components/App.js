import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Garbages from './Garbages/Garbages'
import Garbage from './Garbage/Garbage'

const App = () => {
  return (
    <Routes>
      <Route  exact path="/" component={<Garbages />}></Route>
      <Route  exact path="/garbages/:slug" component={<Garbage />}></Route>
    </Routes>
  )
}

export default App
