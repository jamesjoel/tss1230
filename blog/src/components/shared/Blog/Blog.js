import React from 'react'

const Blog = (props) => {
  console.log(new Date(props.data.date))
  return (
    <>
    <div className="col-lg-3 col-md-6">
                  <article className="post-grid mb-5">
                    <a className="post-thumb mb-4 d-block" href="blog-single.html">
                      <img src="/assets/images/news/f1.jpg" alt="" className="img-fluid w-100" />
                    </a>
                    <span className="cat-name text-color font-extra text-sm text-uppercase letter-spacing-1">{props.data.category}</span>
                    <h3 className="post-title mt-1"><a href="blog-single.html">{props.data.title}</a></h3>

                    {/* <span className="text-muted letter-spacing text-uppercase font-sm">June 15, 2019</span> */}
                    <span className="letter-spacing text-uppercase" style={{fontWeight : "bold"}}>
                        {
                          new Date(props.data.date).getDate()+"-"+(new Date(props.data.date).getMonth()+1)+"-"+new Date(props.data.date).getFullYear()+","+new Date(props.data.date).getHours()+":"+new Date(props.data.date).getMinutes()
                        }
                    </span>

                  </article>
                </div>
    </>
  )
}

export default Blog