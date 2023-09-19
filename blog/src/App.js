import React, {useEffect} from 'react'
import AllRoutes from './AllRoutes/AllRoutes';
import axios from 'axios';
import { API } from './util/API';
import { useDispatch } from 'react-redux'
import {add} from './redux/CategorySlice'



const App = () => {
  let disp = useDispatch();
  useEffect(()=>{
    axios.get(`${API}/category`).then(response=>{
        // setCate(response.data);
        disp(add(response.data))
    })
}, [])



  return (
    <>
        <AllRoutes />      
    </>
  )
}

export default App