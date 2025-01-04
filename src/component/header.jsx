import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faCartShopping, faEllipsisVertical, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const menuRef = useRef(null);
    const searchRef = useRef(null);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const toggleSearch = () => {
        setSearchActive(!searchActive);
    };

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            console.log('Searching for:', searchQuery);

            setSearchQuery('');
        }
    };
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuActive(false);
            }
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchActive(false);
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
                <div className="headerContent__search">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        placeholder="Search for food and items"
                    />
                    <button className="searchButton" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>

            <div className="headerContent__location">
                <FontAwesomeIcon icon={faLocationDot} />
            </div>

            <div ref={menuRef} className={`menu ${menuActive ? 'active' : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#offer">Offers</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#signIn">Sign In</a></li>
                    <li><a href="#cart"><FontAwesomeIcon icon={faCartShopping} /> Cart</a></li>
                </ul>
            </div>

            <div className="searchIcon">
                <button
                    className={`btnSearch ${searchActive ? 'active' : ''}`}
                    aria-expanded={searchActive}
                    aria-label="Toggle search bar"
                    onClick={toggleSearch}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>

            <div className="menuBar">
                <button
                    className="btnMenu"
                    aria-expanded={menuActive}
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                >
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
            </div>
        </div>
    );
}
