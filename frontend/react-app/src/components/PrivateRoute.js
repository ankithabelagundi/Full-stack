import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {Navigate} from "react-router-dom"

export default function 
PrivateRoute({childern}){
    const{token}= useContext(AuthContext)
    return token ? childern:<Navigate to="/login"/>
}