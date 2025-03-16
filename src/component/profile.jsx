import React from "react";
import { auth } from "./firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import { getFirestore, setDoc, doc } from "firebase/firestore";


export default function Profile() { 
    return (
        <>
            <div>
                <button className="logout">Logout</button>
            </div>
        </>
    );
}