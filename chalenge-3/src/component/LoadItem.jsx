import React from 'react'

function LoadItem({item, checkedItems, deleteItem}) {
  return (
    <div className="flex justify-between border-2 mt-6 p-3 px-5 text-lg font-semibold">
        <span style={item.complete ? {textDecoration: 'line-through',color: 'red'}:{}}>{item.task}</span>
        <div className="action flex gap-3">
        <input type="checkbox"checked={item.complete} className="text-green-500" onChange={()=>checkedItems(item.id)} />
        <div>✏</div>
        <div onClick={()=>deleteItem(item.id)} className="cursor-pointer" >🗑</div>
        </div>
    </div>
  )
}

export default LoadItem