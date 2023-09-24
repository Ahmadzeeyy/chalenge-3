
import './index.css'
import AddItem from './pages/AddItem'
import MainPages from './pages/MainPages'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import data from "./data/data.json"
import { useState } from 'react'
import EditItem from './pages/EditItem'


function App() {
    const [item, setItem] = useState(data);
    function addNewItem(newItem){
      setItem([...item, newItem])
    }
    // function editNewItem(editItem){
    //   setItem()
    // }
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPages setItem={setItem} item ={item} />}></Route>
      <Route path="/add-item" element={<AddItem setItem={setItem} item ={item} addNewItem={addNewItem} />}></Route>
      <Route path="/edit-item" element={<EditItem setItem={setItem} item ={item} editNewItem={addNewItem} />}></Route>
    </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
