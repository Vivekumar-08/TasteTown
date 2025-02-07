import React from 'react'
import { menu__food, menu__food__01 } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

export default function food() {
    return (
        <>
            <section id='menu'>
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
        </>
    )
}
