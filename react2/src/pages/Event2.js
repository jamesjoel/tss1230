import React from 'react'

const Event2 = () => {

    let sum = (a)=>{
        a.preventDefault();
    }

    let demo = (a)=>{
        console.log("*************");
        a.preventDefault();
    }

    let demo2 = (e)=>{
        e.preventDefault();
    }
  return (
    <div onContextMenu={(event)=>demo2(event)} className="container my-5" style={{minHeight : "650px"}}>
        <div className="row">
            <div className="col-md-12">
                <button onClick={(event)=>sum(event)} className='btn btn-primary'>Sum</button>
                <br />
                <br />
                <a href='http://google.com' onClick={(event)=>demo(event)}>Click</a>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nihil sequi temporibus distinctio neque recusandae, quos nobis doloribus minus blanditiis. Quasi totam earum placeat, quam dolor veniam impedit blanditiis eligendi!</p>
            </div>
        </div>
    </div>
  )
}

export default Event2