import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){
    let[data,setData]=useState({
        name:"",
        weight:"",
        gender:"",
        age:"",
        email:"",
        password:"",
        disease:"",
        doctorId:""
    })
    let[doctor,setDoctor]=useState([])

    let handleData=(e)=>{
        setData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    console.log(data)

    let nav=useNavigate()

    useEffect(()=>{
        async function getDetails(){
            try{
                let resp=await axios.get("https://api-bdti.onrender.com/doctors")
                setDoctor(resp.data)
            }catch(error){
                console.log(error)
            }
        }
        getDetails();
    },[])

    let handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            let resp=await axios.post("https://api-bdti.onrender.com/patients",data);
            console.log(resp.data);
            alert("Patient Register Successfully...")
            nav("/login")
        }catch(error){
            console.log(error)
        }       
    }

    return(
        <div className="d-flex justify-content-center mt-5">
            <form className="w-50 border border-3 p-5 rounded" onSubmit={handleSubmit}>
                <h1 className="text-center">Register Patients</h1>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your Name" name="name" onChange={handleData}/>
                </div> 
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Weight</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your Weight" name="weight" onChange={handleData}/>
                </div>     
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Gender</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your Gender" name="gender" onChange={handleData}/>
                </div> 
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Age</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your Age" name="age" onChange={handleData}/>
                </div> 
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                    <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Enter your Email" name="email" onChange={handleData}/>
                </div> 
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Password</label>
                    <input type="password" className="form-control" id="formGroupExampleInput" placeholder="Enter your Password" name="password" onChange={handleData}/>
                </div> 
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Disease</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your Disease" name="disease" onChange={handleData}/>
                </div>
                <div className="mb-3">
                   <label htmlFor="formGroupExampleInput" className="form-label">Doctor</label>
                    <select className="form-select" id="inlineFormSelectPref" name="doctorId" onChange={handleData}>
                        <option value="">Choose the Doctor</option>
                        {
                            doctor.map((d)=>(
                                <option key={d.id} value={d.id}>{d.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary w-100">Register</button>
                </div> 
            </form>
        </div>
    )
}

export default Register;