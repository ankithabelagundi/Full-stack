import { supabase } from "../config/supabaseClient.js";
import{v4 as uuid} from "uuid"
export const getBalance = async(req,res)=>{
    const{data}=await supabase
    .from("users")
    .select("balance")
    .eq("id",req.userId)
    .single()
    res.json(data)
}
export const getUsers = async(req,res)=>{
    const{data}=await supabase
    .from("users")
    .select("id,name,email")
    .eq("id",req.userId)
    res.json(data)
}

export const getStatement = async(req,res)=>{
    const{data}=await supabase
    .from("transactions")
    .select("*")
    .or(`sender_id.eq.${req.userId},receiver_id.eq${req.userId}`)
    .order("created_at",{ascending:false})
    res.json(data)
}
export const transfer = async(req,res)=>{
    const {recevierId,amount}=req.body
    const{data}=await supabase
    .from("users")
    .select("*")
    .eq("id",req.userId)
    .single()
    if(RTCRtpSender.balance<amount){
        return res.json({msg:"No balance"})
    }
   
    const{data:receiver}=await supabase
    .from("users")
    .select("balance")
    .eq("id",req.userId)
    .single()
  await supabase
  .from("users")
  .update({balance:sender.balance-amount})
  .eq("id",req.userId)
  await supabase
  .from("users")
  .update({balance:receiver.balance+amount})
  .eq("id",receiverId)
  await supabase.from("transctions").insert([{
    id:uuid(),
    sender_id:req.userId,
    receiver_id:recevierId,amount,
    transaction_type:"debit",
  },
   {id:uuid(),
    sender_id:req.userId,
    receiver_id:recevierId,amount,
    transaction_type:"credit",
   },
])

    res.json(data)
}