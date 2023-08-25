import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { API } from '../../../constants/API'

const Banner = () => {

   let [showDiv, setShowDiv] = useState(false);
   let [city, setCity] = useState([]);
   let [filteredCity, setFilteredCity] = useState([]);
   let [searchText, setSearchText] = useState("");
   useEffect(()=>{
      axios.get(`${API}/city`).then(response=>{
         setCity(response.data);
      })
   }, [])
   /* 
   MUMBAI         =[M, U, M, B, A, I]
   mumbai
   MuMbai

   Mumbai
   */
   let search = (e)=>{
      let a = e.target.value;  // mumbai
      if(a.length > 0){
         setShowDiv(true);
         let temp = a.split(""); // [m,u,m,B,a,i]
         let firstletter = temp[0].toUpperCase(); // M
         temp.splice(0, 1); // [u, m, B, a, i]
         let remainString = temp.join(""); // umBai
         remainString = remainString.toLowerCase(); // umbai
         let finaleString = firstletter+remainString;  // Mumbai
         let arr = city.filter(value=>value.name.startsWith(finaleString));
         setFilteredCity(arr);
      }
      setSearchText(e.target.value);
   }

   let selectText = (e)=>{
      setSearchText(e.target.innerHTML);
      setShowDiv(false);
   }

  return (
    <>
    <section className="banner_main">
         <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
               <li data-target="#myCarousel" data-slide-to="1"></li>
               <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <img className="first-slide" src="assets/images/banner1.jpg" alt="First slide" />
                  <div className="container">
                  </div>
               </div>
               <div className="carousel-item">
                  <img className="second-slide" src="assets/images/banner2.jpg" alt="Second slide" />
               </div>
               <div className="carousel-item">
                  <img className="third-slide" src="assets/images/banner3.jpg" alt="Third slide" />
               </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
         </div>
         <div className="booking_ocline">
            <div className="container">
               <div className="row">
                  <div className="col-md-5">
                     <div className="book_room">
                        <h1>Book a Room Online</h1>
                        <form className="book_now">
                           <div className="row">
                              <div className="col-md-12">
                                 <span>Arrival</span>
                                 <img className="date_cua" src="assets/images/date.png" />
                                 <input className="online_book" placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy" />
                              </div>
                              <div className="col-md-12">
                                 <span>Departure</span>
                                 <img className="date_cua" src="assets/images/date.png" />
                                 <input className="online_book" placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy" />
                              </div>
                              <div className="col-md-12">
                                 <span>Location</span>
                                 
                                 <input className="online_book" placeholder="Location" type="text" value={searchText} onChange={(e)=>search(e)} />
                                 <div style={{backgroundColor : "white", display : showDiv ? 'block' : 'none', width : "382px", height : "150px", overflowY : 'scroll', zIndex : "9999", marginTop : "-25px", position : "absolute"}} >
                                    <ul style={{margin : "5px"}}>
                                       {
                                          filteredCity.map(c => <li onClick={(e)=>selectText(e)} style={{cursor : "pointer"}}>{c.name}</li>)
                                       }
                                    </ul>
                                 </div>
                              </div>
                              <div className="col-md-12">
                                 <button className="book_btn">Search Hotel</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Banner