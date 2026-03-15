import bcrypt from "bcrypt"
import {v4 as uuid} from "uuid"
import{supabase} from "../config/supabaseClient.js"
import generateToken  from "../utils/generateToken.js"

export const signup = async(req,res)=>{
    const{name,email,password}=req.body
    const hash=await bcrypt.hash(password,10)
    const {data,error}=await supabase
    .from("users")
    .insert([
        {
            id:uuid(),
            name,
            email,
            password:hash,
            balance:10000,
        },
    ])
    .select()
    if (error) return res.json(error)
        const token = generateToken(data[0].id)
    res.json({token})
    
}

export const login = async(req,res)=>{
    const{email,password}=req.body

    const {data}=await supabase
    .from("users")
    .select("*")
    .eq("email",email)
    .single()
    if(!data) return res.json({msg: "No user"})
        const ok=await bcrypt.compare(password,data.password)
    if(!ok) return res.json ({msg:"Wrong password"})
        const token = generateToken(data.id)
    res.json({token})
    
}
