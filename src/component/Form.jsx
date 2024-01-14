import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  checkTodo, deleteTodo } from '../Redux/Todo';

const Form = () => {
  const {ToDoArray} = useSelector((state)=>state.Todo)
   
    
    console.log(ToDoArray);
    // const checkchange=(status,id)=>{
 const dispatch =useDispatch()   

                                          const [checkBox,setCheckBox]=useState({
                                            status:"",id:""
                                          })
                                          const handleCheck=(status,id)=>{
                                            setCheckBox({status:status,id:id})
                                            dispatch(checkTodo(checkBox))
                                          }

                                          useEffect(()=>{
                                            handleCheck()
                                          },[checkBox.status])

    // }
  return (
    <div>
    <ul  >
    
    {ToDoArray?.map((add)=>(
      
     <div className={add.status && "bg-primary"}> <li  className=' form-inline m-2 py-3 d-flex justify-content-between align-items-center'>
     <h5  className='ps-3'> <input type="checkbox" checked={add.status} onChange={e=>handleCheck(e.target.checked,add.id)} className='me-3'/>{add.item}</h5> <button onClick={()=>dispatch(deleteTodo(add.id))} className='btn btn-danger me-3'> Delete</button></li></div>
  
    ))}





  
   
   
          
    {/* <li  style={{backgroundColor:{color}}} className='border form-inline m-2 py-3 d-flex justify-content-between align-items-center'>
    <h5 style={{backgroundColor:"whitesmoke"}} className='ps-3'> <input type="checkbox"  className='me-3'/>fghbdszh</h5> <button className='btn btn-danger me-3'> Delete</button></li>

    <li  style={{backgroundColor:{color}}} className='border form-inline m-2 py-3 d-flex justify-content-between align-items-center'>
    <h5 style={{backgroundColor:"whitesmoke"}} className='ps-3'>
      <input type="checkbox" onClick={()=>set()}   className='me-3'/>fghbdszh</h5>

       <button className='btn btn-danger me-3'> Delete</button></li> */}

    </ul>
    </div>
  )
}

export default Form
