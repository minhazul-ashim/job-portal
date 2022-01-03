import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import initializeAuth from '../firebase/firebase.init'
import { postUserData } from '../features/slices/userDataSlice';
import { useDispatch } from 'react-redux';

initializeAuth()

const useFirebase = () => {

    const [user, setUser] = useState(null);

    const [error, setError] = useState('');

    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch()

    const auth = getAuth();

    const googleSignIn = (from, navigate) => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {

                const { email, displayName } = result.user;
                dispatch(postUserData({ email, displayName }))
                navigate(from, { replace: true })
                setUser(result.user)
                setLoading(false)
            })
            .catch(error => setError(error.message))
    }

    const logOut = () => {

        signOut(auth)
            .then(result => { })
            .catch(error => setError(error.message))
    }

    const createUser = (email, password, name) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {

                updateProfile(auth.currentUser, {

                    displayName: name
                })
                setLoading(false)
            })
            .catch(error => setError(error.message))
            .finally(() => {
                dispatch(postUserData({ email: email, displayName: name }))
            })
    }

    const manualSignIn = (email, password, from, navigate) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setLoading(false)
                navigate(from, { replace: true })
            })
            .catch(error => {

                setError(error.message)
            })
    }

    useEffect(() => {

        onAuthStateChanged(auth, user => {

            if (user) {

                setUser(user)
                setLoading(false)
            } else {

                setUser(null)
                setLoading(false)
            }
        })
    }, [])

    return {
        user,
        error,
        setError,
        loading,
        googleSignIn,
        logOut,
        createUser,
        manualSignIn
    };
};

export default useFirebase;