import React from 'react'
import ButtonDelete from '../component/ButtonDelete'
import FilterItem from '../component/FilterItem'
import ItemsList from '../component/ItemsList'
import Header from '../component/header'

function MainPages() {
  return (
    <main className="mx-56 my-8">
    <Header></Header>
    <FilterItem></FilterItem>
    <ItemsList></ItemsList>
    <ButtonDelete></ButtonDelete>
    </main>
  )
}

export default MainPages