import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, provider } from './firebase';
import './Login.css';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [{}, dispatch] = useStateValue();

    const registerUsinggmail = e => {
        e.preventDefault();

        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
                history.push('/')
            })
            .catch((error) => alert(error.message));
    }

    const signIn = e => {
        e.preventDefault();

        //Some Fancy Firebase stuff happens here
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => {
                alert(error.message)
            })
    }

    const register = e => {
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully created new user
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => {
                alert(error.message)
            })

        //Do some fancy firebase register
    }

    return (
        <div className="Login">
            <Link to ="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1600px-Amazon_logo.svg.png" alt="Amazon Logo" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        value={email}
                        onChange= {e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange= {e => setPassword(e.target.value)}
                    />

                    <button
                        className="login__signInButton"
                        type="submit"
                        onClick={signIn}
                    >Sign In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon FAKE CLONE Conditions of Use and Privacy Notice.Need
                </p>

                <button
                    className="login__registerButton"
                    onClick={register}
                >Create your Amazon Account</button>
                <button
                    className="login__registerButton"
                    onClick={registerUsinggmail}
                >Login Using Gmail</button>
            </div>
        </div>
    )
}

export default Login;
