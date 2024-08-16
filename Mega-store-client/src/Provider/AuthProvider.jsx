
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";


export const Context = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    // const axiosPublic = useAxiosPublic()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = async () => {
        setLoading(true)
        setUser(null)
        return signOut(auth)
    }

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            return unsubscribe()
        }
    }, [])



    // brand name
    const [brandName, setBrandName] = useState('')

    // Category
    const [category, setCategory] = useState('')

    const info = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,

        setBrandName,
        brandName,

        category,
        setCategory
    }
    return (
        <Context.Provider value={info}>
            {children}
        </Context.Provider>
    )
}

export default AuthProvider
