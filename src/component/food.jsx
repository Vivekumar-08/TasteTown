import React from 'react'
import logo from '../assets/logo.jpg';
import { menu__food, menu__food__01 } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone, faStar, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faSquareInstagram, faSquareXTwitter, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function food() {
    return (
        <>
            <section id='food'>
                <div className="menu__food__content">
                    <div className="menu__food__content__data">
                        <div className="menu__food__header">
                            <div className="menu__food__content__title">Our Menu</div>
                            <div className="menu__food__content__subtitle">Handpicked for You</div>
                        </div>
                    </div>
                    <div className="food__card">
                        <div className="food__list__data">
                            {menu__food.map((item, index) => {
                                return (
                                    <div
                                        key={index} className="food__list__data__item">
                                        <img src={item.food__image} alt='image' />
                                        <div className="food__data">
                                            <p className='food__name'>{item.food__name}</p>
                                            <div className="price__content">
                                                <div className='food__price__discount'><FontAwesomeIcon icon={faIndianRupeeSign} className='rupee__icon' />{item.food__price__discount} </div>
                                                <div className='food__price'>{item.food__price}</div>
                                            </div>
                                            <div className="rating__content">
                                                <div className='food__rating'>{item.food__rating}<FontAwesomeIcon icon={faStar} className='star__icon' />  </div>
                                                <div className='delivery__time'>●    {item.food__delivery__time}</div>
                                            </div>
                                            <div className='food__delivery'>{item.food__delivery}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="food__card">
                        <div className="food__list__data">
                            {menu__food__01.map((item, index) => {
                                return (
                                    <div
                                        key={index} className="food__list__data__item">
                                        <img src={item.food__image} alt='image' />
                                        <div className="food__data">
                                            <p className='food__name'>{item.food__name}</p>
                                            <div className="price__content">
                                                <div className='food__price__discount'><FontAwesomeIcon icon={faIndianRupeeSign} className='rupee__icon' />{item.food__price__discount}</div>
                                                <div className='food__price'>{item.food__price}</div>
                                            </div>
                                            <div className="rating__content">
                                                <div className='food__rating'>{item.food__rating}<FontAwesomeIcon icon={faStar} className='star__icon' />  </div>
                                                <div className='delivery__time'>●    {item.food__delivery__time}</div>
                                            </div>
                                            <div className='food__delivery'>{item.food__delivery}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <div className="divider"></div>
            <section id="contact" className='footer'>
                <div className="footer-container">
                    <div className="col-1">
                        <div className="logo-footer">
                            <Link to='/'><img src={logo} alt="logo-web" /></Link>
                        </div>
                        <div className="menu-item-footer">
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/menu'>Menu</Link></li>
                                <li><Link to='/offer'>Offers</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <h2>Available in:</h2>
                        <div className="location-delivery">
                            <ul>
                                <li>Bihar</li>
                                <li>Delhi</li>
                                <li>Odisha</li>
                                <li>Mumbai</li>
                                <li>Chennai</li>
                                <li>Bangalore</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-3">
                        <h2>Contact us</h2>
                        <div className="location-name">CENTURION UNIVERSITY OF TECHNOLOGY AND MANAGEMENT (CUTM)</div>
                        <div className="location-address">
                            <a href='https://www.google.com/maps/place/Centurion+University+of+Technology+and+Management+(CUTM)/@18.8070889,84.137693,824m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a3cf98111e52f3b:0x316b288d3abda74e!8m2!3d18.8070889!4d84.1402679!16s%2Fm%2F0q3zzsp!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D'><FontAwesomeIcon icon={faLocationDot} />  Village Alluri Nagar, R.Sitapur, Odisha 761211</a>
                        </div>
                        <div className="mail"><Link to='mailto:vivekumar280108@gmail.com'><FontAwesomeIcon icon={faEnvelope} /> vivekumar280108@gmail.com</Link></div>
                        <div className="phone"><Link to='https://wa.me/+919304808297'><FontAwesomeIcon icon={faPhone} />   +91 9304808297</Link></div>
                        <div className="location-image">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.921792399003!2d84.13801484005214!3d18.807312314565646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3cf98111e52f3b%3A0x316b288d3abda74e!2sCenturion%20University%20of%20Technology%20and%20Management%20(CUTM)!5e1!3m2!1sen!2sin!4v1741769979616!5m2!1sen!2sin"
                                width="400"
                                height="210"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>

                    </div>
                    <div className="col-4">
                        <h2>Social links</h2>
                        <div className="social-media">
                            <ul>
                                <li><Link to='https://x.com/vk8584686'><FontAwesomeIcon icon={faSquareXTwitter} /> Twitter</Link></li>
                                <li><Link to='https://github.com/Vivekumar-08'><FontAwesomeIcon icon={faSquareGithub} />   GitHub</Link></li>
                                <li><Link to='https://www.linkedin.com/in/vivek-kumar08'><FontAwesomeIcon icon={faLinkedin} />   LinkedIn</Link></li>
                                <li><Link to='https://www.facebook.com/therealvivek08'><FontAwesomeIcon icon={faSquareFacebook} />  Facebook</Link></li>
                                <li><Link to='https://www.instagram.com/the_______real_______vivek__08/'><FontAwesomeIcon icon={faSquareInstagram} />    Instagram</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="created">Created by ❤️ <strong>Vivek</strong></div>
                <div className="footer-bottom">
                    <div className="footer-bottom-container">
                        <p>&copy; 2025 Taste Town. All Rights Reserved</p>
                    </div>
                </div>
            </section>
        </>
    )
}
