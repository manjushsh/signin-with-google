type SignInWithRedirectT = {
    auth: any,
    updateUserDetails: Function
};

type SignInWithPopupT = {
    auth: any,
    provider: any,
    updateUserDetails: Function
}

export type { SignInWithRedirectT, SignInWithPopupT };