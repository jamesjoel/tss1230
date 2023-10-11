import React, {useEffect, useState} from 'react'
import Blog from '../../shared/Blog/Blog'
import axios from 'axios'
import {API} from '../../../util/API'
import Box from '../../shared/Box/Box'
import MyDate from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
const Home = () => {

  const [startDate, setStartDate] = useState(new Date());

  let [allBlogs, setAllBlogs] = useState([]);
  useEffect(()=>{
    (async ()=>{
      let response =  await axios.get(`${API}/blogs`)
      setAllBlogs(response.data)
    })();
  }, [])

  return (
    <>
      
        <section className="section-padding">
        <div className="container">
          <div className="row">
          <MyDate dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} />
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="row">
                {
                  allBlogs.map(value=><Blog key={value._id} data={value} /> )
                }
                
                
              </div>
            </div>

            <div className="m-auto">
              <div className="pagination mt-5 pt-4">
                <ul className="list-inline ">
                  <li className="list-inline-item"><a href="#" className="active">1</a></li>
                  <li className="list-inline-item"><a href="#">2</a></li>
                  <li className="list-inline-item"><a href="#">3</a></li>
                  <li className="list-inline-item"><a href="#" className="prev-posts"><i className="ti-arrow-right"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home