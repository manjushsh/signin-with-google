import React, { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initFirebase from "../../firebase";

const initAuth = (updateUserDetails: Function) => {

    // Reference
    // https://firebase.google.com/docs/auth/web/google-signin

    initFirebase()
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            // The signed-in user info.
            const { user } = result;
            updateUserDetails(user);

        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

const signInCallBack = () => { };

const SignInWithGoogle = () => {
    const [userDetails, updateUserDetails] = useState<any>({});
    return (
        <React.Fragment>
            <div className='signin-container' onClick={() => initAuth(updateUserDetails)}>
                {userDetails && userDetails.displayName ? `Welcome to spinner ${userDetails?.displayName}!` : 'Sign In'}
            </div>
        </React.Fragment>
    );
};

export default SignInWithGoogle;