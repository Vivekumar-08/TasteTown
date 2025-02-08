import React from 'react';
import logo from '../assets/logo.jpg';
import location from '../assets/location__image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
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
                            <a href='#home'><img src={logo} alt="logo-web" /></a>
                        </div>
                        <div className="menu-item-footer">
                            <ul>
                                <li><a href='#home'>Home</a></li>
                                <li><a href='#about'>About</a></li>
                                <li><a href='#menu'>Menu</a></li>
                                <li><a href='#offer'>Offers</a></li>
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
                            <a href='https://www.google.com/maps/place/Centurion+University+of+Technology+and+Management+(CUTM)/@18.8070889,84.137693,824m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a3cf98111e52f3b:0x316b288d3abda74e!8m2!3d18.8070889!4d84.1402679!16s%2Fm%2F0q3zzsp!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'><FontAwesomeIcon icon={faLocationDot} />  Village Alluri Nagar, R.Sitapur, Odisha 761211</a>
                        </div>
                        <div className="mail"><a href='mailto:vivekumar280108@gmail.com'><FontAwesomeIcon icon={faEnvelope} /> vivekumar280108@gmail.com</a></div>
                        <div className="phone"><a href='https://wa.me/+919304808297'><FontAwesomeIcon icon={faPhone} />   +91 9304808297</a></div>
                        <div className="location-image"><img src={location} alt="location-image" /></div>
                    </div>
                    <div className="col-4">
                        <h2>Social links</h2>
                        <div className="social-media">
                            <ul>
                                <li><a href='https://x.com/vk8584686'><FontAwesomeIcon icon={faSquareXTwitter} /> Twitter</a></li>
                                <li><a href='https://github.com/Vivekumar-08'><FontAwesomeIcon icon={faSquareGithub} />   GitHub</a></li>
                                <li><a href='https://www.linkedin.com/in/vivek-kumar08'><FontAwesomeIcon icon={faLinkedin} />   LinkedIn</a></li>
                                <li><a href='https://www.facebook.com/therealvivek08'><FontAwesomeIcon icon={faSquareFacebook} />  Facebook</a></li>
                                <li><a href='https://www.instagram.com/the_______real_______vivek__08/'><FontAwesomeIcon icon={faSquareInstagram} />    Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-container">
                        <p>&copy; 2025 Taste Town. All Rights Reserved</p>
                    </div>
                </div>
            </section>
        </>
    );
}
