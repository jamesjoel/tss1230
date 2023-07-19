import React, {useState} from 'react'

const Event1 = () => {

    let a = 600;
    let [pass, setPass] = useState("password");
    

    let fun1 = ()=>{
        console.log("********* on click event");
    }
    let fun2 = ()=>{
        console.log("########### on dobule click event");
    }
    let fun3 = ()=>{
        if(pass == "password"){
            setPass("text");
        }
        else{
            setPass("password");
        }
    }
  return (
    <div className='container' style={{minHeight : "650px"}}>
        <button onDoubleClick={fun2} className='btn btn-info'>Click Event</button>
        <div className="row">
            <div className="col-md-6 my-5">
                <div className="form-group">
                    <label>Password</label>
                    <div className='input-group'>
                        <input type={pass} className='form-control'/>
                            <button onClick={fun3} className='btn btn-outline-dark'>
                                {
                                    pass=="password" ? <i class="fa fa-eye-slash" aria-hidden="true"></i> : <i class="fa fa-eye" aria-hidden="true"></i>
                                }
                            </button>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Event1