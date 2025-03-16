import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();  

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
 
            if (!user.emailVerified) {
                toast.warn('Please verify your email before logging in.', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                return;
            }
 
            toast.success('Login successful! Welcome back to TasteTown 🎉', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
 
            setTimeout(() => {
                navigate('/');
            }, 3000);

        } catch (error) {
            toast.error(error.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }

        localStorage.setItem("isAuthenticated", "true");
        setTimeout(() => {
            toast.success('Login successful! Welcome back to TasteTown 🎉', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            window.location.href = '/';
        }, 2000);

    };

    return (
        <div className="loginForm">
            <form className="login-form" onSubmit={handleLogin}>
                <h1>Welcome Back 👍</h1>
                <p className="login__sub__title">Log in to your account</p>

                <input
                    className="loginInput"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    className="loginInput"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <Link to="/forget" className="forget">Forgot password?</Link>

                <button className="loginBtn" type="submit">Log In</button>

                <p className="signin-page">Don&apos;t have an account? <Link to="/signin">Sign up</Link></p>
            </form>
        </div>
    );
}
