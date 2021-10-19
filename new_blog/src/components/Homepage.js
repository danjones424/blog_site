import React from 'react'
import GoogleLogin from 'react-google-login'

const Homepage = () => {

const login = (response) => {
    console.log("response")
}

    return (
        <div className='home__page'>
            <div className="login__message">
                <h1>Welcome to my Blog!</h1>
                <p>
                  My name is Daniel Jones. This is where I will be keeping my 
                  blog posts as I move through the Flatiron School Software Development 
                  Course.
                </p>
                <GoogleLogin
                    clientId="928232029848-45bm2fqqfrj3db9orar6o6b1us3dsj5t.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <button
                           onClick={renderProps.onClick}
                           disabled={renderProps.disabled}
                           className='login__button'
                        >
                            Use Google Account to Login
                        </button>
                    )}
                    onSuccess={login}
                    onFailure={login}
                    isSignedIn={true}
                    cookiePolicy={"single_host_origin"}
                />
            </div>
        </div>
    )
}

export default Homepage
