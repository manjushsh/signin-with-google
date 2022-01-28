import React, { useState } from "react";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import initFirebase from "./firebase";
import AuthMethods from "./auth-methods";

const initAuth = (updateUserDetails: Function) => {

    // Reference
    // https://firebase.google.com/docs/auth/web/google-signin

    initFirebase()
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    AuthMethods.signInWithPopUp({ auth, provider, updateUserDetails });
}

const SignInWithGoogle = () => {
    const [userDetails, updateUserDetails] = useState<any>({});
    const logoNode = document.getElementById("spinnable-logo");
    if (logoNode) {
        if (userDetails && userDetails.displayName && !logoNode.classList.contains('spinnable-logo')) {
            logoNode.classList.add("App-logo-spin");
        }
        else if (!(userDetails && userDetails.displayName)) {
            logoNode.classList.remove("App-logo-spin");
        }
    }
    return (
        <React.Fragment>
            <div className='signin-container' onClick={() => initAuth(updateUserDetails)}>
                {userDetails && userDetails.displayName ? `Welcome to spinner ${userDetails?.displayName}!` : 'Sign In'}
            </div>
        </React.Fragment>
    );
};

export default SignInWithGoogle;