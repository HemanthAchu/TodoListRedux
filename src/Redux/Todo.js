import { createSlice } from "@reduxjs/toolkit";

const todo =createSlice({
    name:'todos',
    initialState:{
        ToDoArray:[],
        counter:""
    },
    reducers:{
        AddArray:(state,action)=>{
            state.ToDoArray.push(action.payload)
        },
        
        deleteTodo:(state,actions)=>{
        state.ToDoArray =state.ToDoArray.filter(todo=>todo.id!==actions.payload);
        const completedCount=state.ToDoArray.filter(item=>item.status).length
        state.counter=completedCount
    }
        ,
                                                    checkTodo:((state,action)=>{
                                                        const{status,id}=action.payload
                                                        state.ToDoArray.filter(item=>{
                                                            if(item.id==id){
                                                                item.status=status
                                                            }
                                                            return item
                                                        })
                                                        const completedCount=state.ToDoArray.filter(item=>item.status).length
                                                    state.counter=completedCount
                                                    })
    }
})
 export const {AddArray,checkTodo, deleteTodo}=todo.actions
 export default todo.reducer 