import { useState,useContext } from "react";
import API from "../api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {login}= useContext(AuthContext) 
    const nav = useNavigate()
    const submit =async()=>{
        const res= await API.post("/auth/login",{
            email,
            password,
        })
         console.log(res.data);
        login(res.data.token)
        nav("/")
    }
    return(
        <div>
            <h2>Login</h2>
            <input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
            <input placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={submit}>Login</button>


        </div>
    )
}