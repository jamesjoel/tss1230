import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom';
import axios  from 'axios';

import { API } from '../../../util/API';
import { useSelector, useDispatch } from 'react-redux'
import { doLogin } from '../../../redux/UserAuthSlice'




const Header = () => {
	let [cate, setCate] = useState([]);
	let [isLoggedIn, setIsLoggedIn] = useState(false)
	let disp = useDispatch();

	let check = useSelector(state=>state.UserAuthSlice);

	useEffect(()=>{
		if(localStorage.getItem("access-token"))
		{
			disp(doLogin());
		}
	}, [])

	useEffect(()=>{
        axios.get(`${API}/category`).then(response=>{
            setCate(response.data);
        })
    }, [])

  return (
    <header className="header-top bg-grey justify-content-center">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-lg-2 col-md-4 text-center d-none d-lg-block">
					<a className="navbar-brand " href="index.html">
						<img src="/assets/images/logo.png" alt="" className="img-fluid" />
					</a>
				</div>

				<div className="col-lg-8 col-md-12">
					<nav className="navbar navbar-expand-lg navigation-2 navigation">
						<a className="navbar-brand text-uppercase d-lg-none" href="#">
							<img src="images/logo.png" alt="" className="img-fluid" />
						</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse"
							aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
							<span className="ti-menu"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbar-collapse">
							<ul id="menu" className="menu navbar-nav mx-auto">
								<li className="nav-item">
                                    <NavLink to="/" className="nav-link">Home</NavLink>
								</li>
								
								<li className="nav-item dropdown">
									<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown"
										aria-haspopup="true" aria-expanded="false">
										Blog By Category
									</a>
									<div className="dropdown-menu" aria-labelledby="navbarDropdown2">
										{
											cate.map((value, index)=><NavLink key={value._id} className="dropdown-item" to={"/view-blogs-by-category/"+value.name}>{value.name}</NavLink>)
										}
										
									</div>
								</li>
								{
									check.login  ? (
										<>
										<li className="nav-item dropdown">
												<NavLink  data-toggle="dropdown" className="nav-link dropdown-toggle">{localStorage.getItem("name")}</NavLink>
												<div className='dropdown-menu'>

													<NavLink to="/blogger/my-account" className="dropdown-item">My-Account</NavLink>
													<NavLink to="/blogger/my-blogs" className="dropdown-item">My-Blogs</NavLink>
													<NavLink to="/logout" className="dropdown-item">Logout</NavLink>
												</div>
											</li>
											
										</>
									) : (
										<>
										<li className="nav-item">
											<NavLink to="/login" className="nav-link">Login</NavLink>
										</li>
										<li className="nav-item">
											<NavLink to="/signup" className="nav-link">Signup</NavLink>
										</li>
										</>
									)
								}
								
								
								

							</ul>
						</div>
					</nav>
				</div>

				
			</div>
		</div>
	  </header>
  )
}

export default Header