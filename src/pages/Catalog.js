import React from 'react'
import {Outlet, useParams}from 'react-router-dom'
import PageHeader from '../components/pageHeader'
import { category as cate } from '../api/tmbdApi'
import MovieGrid from '../components/movie-grid'
const Catalog = () => {

  const {category}=useParams()
  console.log(category)
  return (
    <>
      <PageHeader>
      { category ===cate.movie? 'Movies':'TV Series'}
      </PageHeader>
      <div className='container'>
        <div className='section mb-3'>
          <Outlet/>
          <MovieGrid category={category} > </MovieGrid>
        </div>
      </div>
    </>
  )
}

export default Catalog