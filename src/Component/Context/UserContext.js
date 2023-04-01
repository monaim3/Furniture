import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.config';

import  {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth'


export  const AuthContex =createContext()
const auth = getAuth(app);
const Googleprovider = new GoogleAuthProvider();
const UserContext = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading] = useState(true);
    const createuser=(email,password)=>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
        setLoading(true)
       return signInWithPopup(auth, Googleprovider)
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const resetmethod=(email)=>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email)
    }
    useEffect( () =>{
        const unSubscribe = onAuthStateChanged( auth, currentUser =>{
            console.log('current User inside state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => unSubscribe();

    }, [])
    const authInfo={user,loading,createuser,signIn,googleSignIn,logOut,resetmethod}
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default UserContext;