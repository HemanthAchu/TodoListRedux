import React from 'react'
import { useSelector } from 'react-redux'

const Totalitems = () => {
  const {counter} = useSelector((state)=>state.Todo)
  return (
    <div style={{height:"80px"}} className=' form-inline  py-3'>
     <h2 style={{float:"left"}} className='ps-5' >Total complete items: {counter}</h2>
    </div>
  )
}

export default Totalitems
