import { signInWithPopup, GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import { SignInWithPopupT, SignInWithRedirectT } from './index.d';

const AuthMethods = {
    signInWithPopUp: ({ auth, provider, updateUserDetails }: SignInWithPopupT) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential?.accessToken;

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
                return {
                    errorCode,
                    errorMessage,
                    email,
                    credential,
                };
            });
    },
    SignInWithRedirect: ({ auth, updateUserDetails }: SignInWithRedirectT) => {
        getRedirectResult(auth)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access Google APIs.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;

                // The signed-in user info.
                const { user }: any = result;
                updateUserDetails(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                return {
                    errorCode,
                    errorMessage,
                    email,
                    credential,
                };
            });
    },
}

export default AuthMethods;