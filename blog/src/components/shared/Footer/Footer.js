import React, {useRef} from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
	let x = useRef();
  return (
<>
{/* <h1 ref={x}>hello world</h1>
<button onClick={()=>console.log(x.current.innerHTML)}>OK</button> */}
<section className="footer-2 section-padding gray-bg pb-5">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6">
					<div className="subscribe-footer text-center">
						<div className="form-group mb-0">
							<h2 className="mb-3">Subscribe Newsletter</h2>
							<p className="mb-4">Subscribe my Newsletter for new blog posts , tips and info.
							</p>
							<div className="form-group form-row align-items-center mb-0">
								<div className="col-sm-9">
									<input type="email" className="form-control" placeholder="Email Address" />
								</div>
								<div className="col-sm-3">
									<a href="#" className="btn btn-dark ">Subscribe</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-btm mt-5 pt-4 border-top">
				<div className="row">
					<div className="col-lg-12">
						<ul className="list-inline footer-socials-2 text-center">
							<li className="list-inline-item">
								<NavLink className="nav-link" to="/teacher">Teacher</NavLink>
								<NavLink className="nav-link" to="/teacher/list">Teacher-List</NavLink>
								<NavLink className="nav-link" to="/teacher/demo">Teacher-Demo</NavLink>
							</li>
							
						</ul>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<div className="copyright text-center ">
              <p>
							@ copyright all reserved to <a href="https://themefisher.com/">themefisher.com</a>-2019 Distribution <a
								href="https://themewagon.com">ThemeWagon.</a>
                </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</>
  )
}

export default Footer