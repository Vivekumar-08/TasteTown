import React from 'react';
import logo from '../assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {
    faSquareFacebook,
    faSquareInstagram,
    faSquareXTwitter,
    faLinkedin,
    faSquareGithub
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <>
            <section id="contact" className='footer'>
                <div className="footer-container">
                    <div className="col-1">
                        <div className="logo-footer">
                            <img src={logo} alt="logo-web" />
                        </div>
                        <div className="menu-item-footer">
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Menu</li>
                                <li>Offers</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <h2>Available in:</h2>
                        <div className="location-delivery">
                            <ul>
                                <li>Bihar</li>
                                <li>Delhi</li>
                                <li>Mumbai</li>
                                <li>Chennai</li>
                                <li>Kolkata</li>
                                <li>Bangalore</li>
                                <li>Hyderabad</li>
                                <li>Pune</li>
                                <li>Jaipur</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3">
                        <h2>Contact us</h2>
                        <div className="location-name">CENTURION UNIVERSITY OF TECHNOLOGY AND MANAGEMENT (CUTM)</div>
                        <div className="location-address">
                            <FontAwesomeIcon icon={faLocationDot} /> Village Alluri Nagar, R.Sitapur, Odisha 761211
                        </div>
                    </div>
                    <div className="col-4">
                        <h2>Social links</h2>
                        <div className="social-media">
                            <ul>
                                <li><FontAwesomeIcon icon={faSquareXTwitter} /> Twitter</li>
                                <li><FontAwesomeIcon icon={faSquareGithub} />   GitHub</li>
                                <li><FontAwesomeIcon icon={faLinkedin} />   LinkedIn</li>
                                <li><FontAwesomeIcon icon={faSquareFacebook} /> Facebook</li>
                                <li><FontAwesomeIcon icon={faSquareInstagram} />    Instagram </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
