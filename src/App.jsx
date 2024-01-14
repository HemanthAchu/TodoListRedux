
import './App.css'
import Addform from './component/Addform';
import Form from './component/Form';
import Totalitems from './component/Totalitems';

function App() {


  return (
    <>
<div style={{backgroundColor:"skyblue"}} className='text-center container mt-5 p-4 border'>
  <h1>ToDoList</h1>
   <Addform/>
   <Form/>
   <Totalitems/>
</div>
    </>

  )
}

export default App
