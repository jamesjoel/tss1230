import React, {useState, useEffect} from 'react'
import Banner from '../../shared/Banner/Banner'
import Hotels from '../../shared/Hotels/Hotels'
import Gallery from '../../shared/Gallery/Gallery'
import axios from 'axios'
import { API } from '../../../constants/API'

const Home = () => {

   let [data, setData] = useState([]);
   useEffect(()=>{
      axios.get(`${API}/hotels`).then((response)=>{
         setData(response.data);
      })
   }, [])

   let gellery = [
      {
         _id : 1,
         image : "assets/images/gallery1.jpg"
      },
      {
         _id : 2,
         image : "assets/images/gallery2.jpg"
      },
      {
         _id : 3,
         image : "assets/images/gallery3.jpg"
      },
      {
         _id : 4,
         image : "assets/images/gallery4.jpg"
      },
      {
         _id : 5,
         image : "assets/images/gallery5.jpg"
      }
   ]


  return (
    <>
    <Banner />
    <div  className="our_room">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>Our Room</h2>
                     <p>Lorem Ipsum available, but the majority have suffered </p>
                  </div>
               </div>
            </div>
            <div className="row">

               {
                  data.map((d)=>{
                     return(
                        <Hotels key={d._id} info={d}/>
                     )
                  })
               }
               
            </div>
         </div>
      </div>
     
      <div  className="gallery">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2>gallery</h2>
                  </div>
               </div>
            </div>
            <div className="row">
                  {
                     gellery.map((g)=>{
                        return(
                           <Gallery key={g._id} photo={g} />
                        )
                     })
                  }      
            </div>
         </div>
      </div>
    </>
  )
}

export default Home