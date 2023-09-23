import React from 'react'
import ButtonDelete from '../component/ButtonDelete'
import FilterItem from '../component/FilterItem'
import ItemsList from '../component/ItemsList'
import Header from '../component/header'
import { useState } from 'react'
import data  from '../data/data.json'


function MainPages() {
  const [item, setItem] = useState(data);
    function handleChecked (id){ 
    setItem((newData) =>newData.map((items)=>(items.id === id ? { ...items, complete: !items.complete}: items)
    ))
  }
    function handleDeleteItem (id){
      confirm( `Apakah yakin untuk menghapus ? ${item.task}` )
        if(confirm){
          setItem((newData)=>newData.filter((item)=>(item.id !== id)))
        }else{
          setItem(item)
        }
  }

  return (
    <main className="mx-56 my-8">
    <Header></Header>
    <FilterItem></FilterItem>
    <ItemsList items ={item} checkedItems = {handleChecked} deleteItem ={handleDeleteItem}></ItemsList>
    <ButtonDelete></ButtonDelete>
    </main>
  )
}

export default MainPages