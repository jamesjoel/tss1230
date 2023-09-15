import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { add, remove, update } from '../redux/TeacherSlice'


const Home = () => {


  let data = useSelector(state=>state);
  let dispatch = useDispatch();

  let [teacher, setTeacher] = useState({
    name : "",
    age : "",
    _id : ""
  })

  let saveAndUpdate = ()=>{
    if(teacher._id){

      dispatch(update(teacher));
    }else{

      dispatch(add(teacher));
    }
    setTeacher({ name : "", age : "", _id : ""})
  }

  let del = (obj)=>{
    dispatch(remove(obj));
  }

  let edit = (obj)=>{
    setTeacher(obj);
  }
  return (
    <>
    <div>Home</div>
      {
        data.map(value=><h3 key={value._id}>{value.name} ------ {value.age} ----- <button onClick={()=>del(value)}>Del</button>---<button onClick={()=>edit(value)}>Update</button></h3>)
      }

      <input type='text' value={teacher.name} onChange={(e)=>setTeacher({...teacher, name : e.target.value})} placeholder='Name'/>
      <br />
      <br />
      <input type='text' value={teacher.age} onChange={(e)=>setTeacher({...teacher, age : e.target.value})} placeholder='Age'/>
      <br />
      <br />
      <button onClick={saveAndUpdate}>{teacher._id ? "Update" : "Add"}</button>
      
    </>
    
  )
}

export default Home