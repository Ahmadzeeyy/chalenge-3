
import './index.css'
import AddItem from './pages/AddItem'
import MainPages from './pages/MainPages'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPages />}></Route>
      <Route path="/add-item" element={<AddItem />}></Route>
    </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
