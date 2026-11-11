import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Home(){
    let dispatch=useDispatch()
    let data=useSelector((state)=>state.doctorData)

    async function getDetails() {
        let resp=await axios.get("https://api-bdti.onrender.com/doctors")
        dispatch({type:"add",payload:resp.data})
    }

    useEffect(()=>{
        getDetails()
    },[])
    return(
        <>
            <div className="d-flex justify-content-evenly mt-5">
                {
                    data.map((d)=>(
                        <div key={d.id} className="card" style={{width: "18rem"}}>
                            <div class="card-body">
                                <p className="card-text">Name : {d.name}</p>
                                <p className="card-text">Salary : {d.salary}</p>
                                <p className="card-text">Age : {d.age}</p>
                                <p className="card-text">Gender : {d.gender}</p>
                                <p className="card-text">Specialization : {d.specialization}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Home;