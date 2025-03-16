import React, { useState, useEffect } from 'react';
import './signin.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { toast } from 'react-toastify';

export default function Signin() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);

    const db = getFirestore();

    const handleSignUp = async (e) => {
        e.preventDefault();

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long.', { position: "top-center" });
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match.', { position: "top-center" });
            return;
        }

        try {
            setLoading(true);
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await sendEmailVerification(user);
            toast.info('A verification email has been sent to your email address.', { position: "top-center" });

            await setDoc(doc(db, 'users', user.email), {
                name,
                emailVerified: false,
            });


            const checkVerification = setInterval(async () => {
                await user.reload();
                if (auth.currentUser.emailVerified) {
                    setEmailVerified(true);
                    setLoading(false);
                    clearInterval(checkVerification);
                    localStorage.setItem("isAuthenticated", "true");
                    toast.success('Email verified! Redirecting to TasteTown...', { position: "top-center" });
                    setTimeout(() => window.location.href = '/', 1000);
                }
            }, 3000);

        } catch (error) {
            setLoading(false);
            toast.error(error.message, { position: "top-center" });
        }
    };

    return (
        <div className="signinForm">
            {loading ? (
                <div className="loading">
                    <h2>Verifying your email... Please check your inbox 📩</h2>
                </div>
            ) : (
                <form className="signin-form" onSubmit={handleSignUp}>
                    <h2>Welcome To TasteTown 🤝</h2>
                    <p className="signin__sub__title">Sign up now to get started</p>

                    <input onChange={(e) => setName(e.target.value)} className="signinInput" type="text" name="name" placeholder="Full Name" required />
                    <input onChange={(e) => setEmail(e.target.value)} className="signinInput" type="email" name="email" placeholder="Email Address" required />
                    <input onChange={(e) => setPassword(e.target.value)} className="signinInput" type="password" name="password" placeholder="Create Password (6+ characters)" required />
                    <input onChange={(e) => setConfirmPassword(e.target.value)} className="signinInput" type="password" name="confirmPassword" placeholder="Confirm Password" required />

                    <button className="signinBtn" type="submit">Sign Up</button>
                    <p className="login-page">Already have an account? <Link to="/login">Login</Link></p>
                </form>
            )}
        </div>
    );
}
