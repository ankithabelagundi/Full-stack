import { useEffect,useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";
export default function Dashboard(){
    const [balance,setBalance]=useState(0)
    useEffect(()=>{
        API.get("/account/balance").then((res)=>{
            setBalance(res.data.balance)
        })
    },[])
    return(
        <div>
            <h2>Balance:{balance}</h2>
            <Link to="/send">Send</Link>
            <Link to="/statement">Statement</Link>
        </div>
    )
}