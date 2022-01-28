import React from "react";

declare global {
    interface Window {
        google: any;
    }
};

const SignInWithGoogleV2 = () => {

    return (
        <React.Fragment>
            <div id='signin-container' className='signin-container'>
                <div id="g_id_onload"
                    data-client_id="72622534160-ifku0o6toknndafb6k3q8hust9haq1u7.apps.googleusercontent.com"
                    data-context="signin"
                    data-ux_mode="popup"
                    data-callback="signInCallBack"
                    data-nonce=""
                    data-skip_prompt_cookie={process.env.REACT_APP_COOKIE_ID}
                    data-auto_select="true">
                </div>

                <div className="g_id_signin"
                    data-type="standard"
                    data-shape="pill"
                    data-theme="filled_blue"
                    data-text="continue_with"
                    data-size="large"
                    data-logo_alignment="left">
                </div>
            </div>
            <div id="user-welcome"></div>
        </React.Fragment>
    );
};

export default SignInWithGoogleV2;