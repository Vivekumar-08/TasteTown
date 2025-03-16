import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.jpg';
import New from '../assets/new.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCartShopping, faEllipsisVertical, faMagnifyingGlass, faCircleUser, faTags, faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [userAddress, setUserAddress] = useState();
    const [profileDropdown, setProfileDropdown] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");

    const menuRef = useRef(null);
    const searchRef = useRef(null);
    const profileRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }, []);

    useEffect(() => {
        if (latitude && longitude) {
            const getUserAddress = async () => {
                let url = `https://api.opencagedata.com/geocode/v1/json?key=976da4bbe8744323a05e7abe04d89be0&q=${latitude}%2C+${longitude}&pretty=1&no_annotations=1`;
                const loc = await fetch(url);
                const data = await loc.json();
                setUserAddress(data.results[0]?.components?._normalized_city || 'Unknown');
            };
            getUserAddress();
        }
    }, [latitude, longitude]);

    useEffect(() => {
        setIsAuthenticated(localStorage.getItem("isAuthenticated") === "true");
    }, []);


    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const toggleSearch = () => {
        setSearchActive(!searchActive);
    };

    const toggleProfileDropdown = () => {
        setProfileDropdown(!profileDropdown);
    };

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        setIsAuthenticated(false);
        navigate("/signin");
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuActive(false);
            }
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchActive(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setProfileDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div ref={searchRef} className={`search ${searchActive ? 'active' : ''}`}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for food and items"
                />
                <button className="searchButton" onClick={() => setSearchQuery('')}>Search</button>
            </div>

            <div className="headerContent__location">
                <button><FontAwesomeIcon icon={faLocationDot} /></button>
                <div className="currentAddress">{userAddress}</div>
            </div>

            <div ref={menuRef} className={`menu ${menuActive ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/food"><FontAwesomeIcon icon={faBowlFood} /> Food</Link></li>
                    <li><Link to="/offer"><FontAwesomeIcon icon={faTags} /> Offers<sup><img src={New} alt="image" /></sup></Link></li>
                    <li><Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /> Cart</Link></li>
                </ul>
            </div>

            <div className="searchIcon">
                <button onClick={toggleSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>

            <div className="profile" ref={profileRef}>
                <button onClick={toggleProfileDropdown}>
                    <FontAwesomeIcon icon={faCircleUser} />
                </button>
                {profileDropdown && (
                    <div className="profileDropdown">
                        <ul>
                            {!isAuthenticated ? (
                                <li><Link to="/signin">Sign In</Link></li>
                            ) : (
                                <li><button className='logout-btn' onClick={handleLogout}>Logout</button></li>
                            )}
                        </ul>
                    </div>
                )}
            </div>

            <div className="menuBar">
                <button onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
            </div>
        </div>
    );
}
