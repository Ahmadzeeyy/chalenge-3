import React from 'react'

function ItemsList() {
  return (
    <section className="flex-col gap-3">
      <div className="flex justify-between border-2 mt-6 p-3 px-5 text-lg font-semibold">
        <span> Nama Item</span>
        <div className="action flex gap-3">
        <div><input type="checkbox"/></div>
        <div>✏</div>
        <div>🗑</div>
        </div>
      </div>
    </section>
  )
}

export default ItemsList