import { useEffect, useState } from "react";
import { AuthContext } from "./Context";
import app from "../FireBase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    console.log(user);

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    const logOutUser = () => {
        return signOut(auth);
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    } 

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user, 
        setUser, 
        createUser,
        updateUser,
        logOutUser,
        logInUser,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;