import React from 'react';
function AddItem() {
  return (
    <section className="mx-56 my-8"> 
      <div className="header">
        <h1 className="text-center text-3xl font-bold mb-5">TodoInput</h1>
        <div className="flex p-5 px-8 border-2">
            <div className="flex-col w-full">
              <div className="relative">
                <input type="text" className="p-2 border-2 px-14 w-full mb-4 focus:outline-gray-300" placeholder="Input/Edit todo"/>
                <div className=" bg-[#16A3B5]  absolute top-0 h-[42px] w-12 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
              </div>
              <button className="py-2 font-lg bg-[#16A3B5] w-full text-white rounded-sm ">Submit</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default AddItem