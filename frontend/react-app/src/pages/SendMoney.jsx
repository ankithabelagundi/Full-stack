import { useEffect, useState } from "react";
import API from "../api";
export default function SendMoney() {
    const [users, setUsers] = useState([])
    const [receiver, setReceiver] = useState("")
    const [amount, setAmount] = useState("")
    useEffect(() => {
        API.get("/account/users").then((res) => {
            setUsers(res.data)
        })
    }, [])
    const send = async () => {
        await API.post("/account/transfer", {
            receiverId: receiver,
            amount: Number(amount),
        })
        alert("sent")
    }
    return (
        <div>
            <h2> Send Money</h2>
            <select onChange={(e)=> setReceiver(e.target.value)}>
                <option>Select</option>
                {users.map((u)=>(
                    <option key={u.id} value={u.id}>{u.name}</option>
                ))}
            </select>
            <input placeholder="amount" onChange={(e)=>setAmount(e.target.value)}/>
            <button onclick={send}>Send</button>
        </div>
    )
}