import React from 'react'
import LoadItem from './LoadItem'
import data from '../data/data.json'
import { useState } from 'react'




function ItemsList({items, checkedItems,deleteItem}) {
  return (
    <section className="flex-col gap-3">
        {items.map((item)=>(
        <LoadItem key={item.id} item={item} checkedItems={checkedItems} deleteItem={deleteItem}></LoadItem>
        ))}
    </section>
  )
}

export default ItemsList