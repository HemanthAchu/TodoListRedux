import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddArray } from '../Redux/Todo';

const Addform = () => {

    const [input,setinput] =useState('');
const {ToDoArray,} = useSelector((state)=>state.Todo)
const dispatch =useDispatch()


const handle=(e)=>{
  if(input){
    e.preventDefault();
  const newValue =input
 dispatch(AddArray({id:Date.now(),item:newValue}))
 setinput('')
  }else{
    alert("enter")
    
  }
 
}
console.log(ToDoArray);

  return (
    <div>
      <form  onSubmit={handle} className='form-inline mt-3 ms-4  mb-3 d-flex justify-content-between' >

<input 
className='w-50 form-control ms-4 '
placeholder='Add Items . . . . . '
value={input}
onChange={(e)=>setinput(e.target.value)}
type="text" />

<button   type='submit' className='btn btn-primary me-4 '>submit</button>
      </form>
    </div>
  )
}

export default Addform
