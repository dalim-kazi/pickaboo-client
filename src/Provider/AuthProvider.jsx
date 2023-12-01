import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.Config";
import axios from "axios";
 
export const AuthContext = createContext(null)
const auth =getAuth(app)
const googleProvider= new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [searchProducts, setSearchProducts] = useState([])
    
    const [loading, setLoading] = useState(true)
    const createAccountEmailAndPassword = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const singInAccountWithEmailAndPassword = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const updateYourProfile = (name,image) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:image
        })
    }
    
    const googleSinUp = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser)
    }
    const passwordForget = (email) => {
     return sendPasswordResetEmail(auth,email)
 }
    const handleSearchProducts = (text) => {
        setSearchProducts(text)
  }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser) 
            if (currentUser) {
                axios.post(`https://bata-server.vercel.app/jwt`, { email: currentUser.email })
                    .then(data => {
                        const token =data.data.token
                        localStorage.setItem("accessToken",token)
                        setLoading(false)
               })
             }
          
            else {
                localStorage.removeItem("accessToken")
           }
        })
        return ()=>unsubscribe()
    },[])
    const userInfo = {
        user,
        loading,
        createAccountEmailAndPassword,
        singInAccountWithEmailAndPassword,
        updateYourProfile,
        googleSinUp,
        logOut,
        handleSearchProducts,
        emailVerify,
       passwordForget,
       searchProducts
   }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
               {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;