import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    let[data,setData]=useState({
            email:"",
            password:"",
    })

    let handleData=(e)=>{
        setData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    let nav=useNavigate();

    let handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            let resp=await axios.post("https://api-bdti.onrender.com/login",data);
            console.log(resp.data);
            localStorage.setItem("user",resp.data.patient.email)
            alert("Login Successfully...")
            nav("/")
        }catch(error){
            console.log(error)
        }       
    }

    return(
        <div className="d-flex justify-content-center">
            <form className="w-50 border border-3 p-5 rounded" onSubmit={handleSubmit}>
                 <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Enter your Email" name="email" onChange={handleData}/>
                </div> 
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput" placeholder="Enter your Password" name="password" onChange={handleData}/>
                </div>
                 <div className="mb-3">
                    <button className="btn btn-primary w-100">Login</button>
                </div> 
            </form>
        </div>
    )
}

export default Login;