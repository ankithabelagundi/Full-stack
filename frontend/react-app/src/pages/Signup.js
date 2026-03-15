import { useState,useContext } from "react";
import API from "../api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {login}= 
}