import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import initializeAuth from '../firebase/firebase.init'

initializeAuth()

const useFirebase = () => {

    const [user, setUser] = useState(null);

    const [error, setError] = useState('');

    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    const googleSignIn = () => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => setError(error.message))
    }

    const logOut = () => {

        signOut(auth)
            .then(result => console.log('user logged out'))
            .catch(error => setError(error.message))
    }

    useEffect(() => {

        onAuthStateChanged(auth, user => {

            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
    }, [])

    return {
        user,
        error,
        loading,
        googleSignIn,
        logOut
    };
};

export default useFirebase;