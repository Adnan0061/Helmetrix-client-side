import { useEffect, useState } from "react";
import InitializeAuthentication from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";


InitializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)
    const [ authError, setAuthError ] = useState('')

    const auth = getAuth();
    
    useEffect(() => {
        // setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        
    }, [auth])
    

    const registerUser = (email, password, name) => {
        setAuthError('');
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                saveUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name
                  })
                  .then(()=>{

                  }).catch((error)=>{

                  })
                setIsLoading(false)
                alert('Account successfully registered')
            })
            .catch((error) => {
                setIsLoading(false)
                setAuthError(error.message);
            })
            // .finally(()=>{

            // })
    }


    const LoginUser = (email, password) => {
        // setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
            // .then((userCredential) => {
            //     // Signed in 
            //     const user = userCredential.user;
            //     setAuthError('');
            // })
            // .catch((error) => {
            //     setAuthError(error.message);
            // })
            // .finally(()=>{
            //     setIsLoading(false)
            // })
    }

    const saveUser = ( email, displayName, method ) => {
        const user = { email, displayName };
        fetch('https://protected-wildwood-26801.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })

    }


    const logOutUser = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return {
        user,
        isLoading,
        setIsLoading,
        authError,
        registerUser,
        LoginUser,
        logOutUser,
    }

}

export default useFirebase;