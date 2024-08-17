/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";


export const Context = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
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
            setLoading(false)
            console.log(currentUser)
            
        })
        return () => {
            return unsubscribe()
        }
    }, [])


    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const toggleSidebar = () => {
      setIsSidebarVisible(!isSidebarVisible);
    };

    const [allProducts, setAllProducts] = useState([])

    // console.log(allProducts)

    // brand name
    const [brandName, setBrandName] = useState('')

    // Category
    const [category, setCategory] = useState('')

    // Price Range
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000);

    const info = {
        setAllProducts,
        allProducts,

        user,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut,

        // filter by brand name
        setBrandName,
        brandName,
        // category
        category,
        setCategory,

        // price range
        minPrice,
        maxPrice,
        setMinPrice,
        setMaxPrice,

        // sidebar
        toggleSidebar,
        isSidebarVisible,
        setIsSidebarVisible
    }
    return (
        <Context.Provider value={info}>
            {children}
        </Context.Provider>
    )
}

export default AuthProvider
