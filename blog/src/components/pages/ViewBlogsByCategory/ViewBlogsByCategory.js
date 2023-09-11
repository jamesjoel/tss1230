import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { API } from '../../../util/API';
import Blog from '../../shared/Blog/Blog';

const ViewBlogsByCategory = () => {

    let [allCate, setAllCate] = useState([]);
    let params = useParams();
    let category = params.cate;
    
    useEffect(()=>{
        axios.get(`${API}/blogs/${category}`).then(response=>{
            
            setAllCate(response.data);
        })
    }, [params])
  return (
    <div className="container my-5" style={{minHeight : "600px"}}>
        <div className="row">
            <div className="col-md-12">
                <h4>View All Blogs By Category</h4>
                <div className='row'>
                    {
                        allCate.map(value=> <Blog data={value} />)
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewBlogsByCategory