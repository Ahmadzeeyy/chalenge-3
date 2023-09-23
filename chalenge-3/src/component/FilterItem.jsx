import React from 'react'

function FilterItem() {
  return (
    <section>
      <h1 className="text-center text-3xl font-semibold mt-14">TodoList</h1>
      <div className="mt-7 gap-4 flex">
        <button className="py-2 bg-[#16A3B5] font-lg w-2/4 text-white rounded-sm">All</button> 
        <button className="py-2 bg-[#16A3B5] font-lg w-2/4 text-white rounded-sm">Done</button> 
        <button className="py-2 bg-[#16A3B5] font-lg w-2/4 text-white rounded-sm">Todo</button> 
      </div>
    </section>
  )
}

export default FilterItem