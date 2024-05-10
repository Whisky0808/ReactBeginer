import { useState } from "react";
import {login,logout} from "../store"
import { useDispatch,useSelector } from "react-redux";

import {auth,provider }from '../config/firebase';
import { signInWithPopup } from "firebase/auth";
import {useNavigate} from "react-router-dom";


export const Login=()=>{

    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth,provider);
        console.log(result);
        navigate("/");
        
    }
    
    return(
        <div>
            <p>Sign In  With Google To Continue </p>
            <button onClick={signInWithGoogle}>Sign in with Google </button>
        </div>
    )
}