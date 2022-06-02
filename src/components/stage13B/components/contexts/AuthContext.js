import React, { useContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup ,GoogleAuthProvider } from "firebase/auth";
import App from '../firebase/firebase';

App();
const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    function signInWithGoogle() {
        return signInWithPopup(auth, provider);
    }

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function logout() {
        return auth.signOut();
    }

    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        signInWithGoogle,
        login,
        signup,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && props.children}
        </AuthContext.Provider>
    )
}