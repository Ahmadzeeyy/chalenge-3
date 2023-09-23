import React from 'react'
import LoadItem from './LoadItem'

function ItemsList({items, checkedItems}) {
  return (
    <section className="flex-col gap-3">
        {items.map((item)=>(
        <LoadItem key={item.id} item={item} checkedItems={checkedItems}></LoadItem>
        ))}
    </section>
  )
}

export default ItemsList