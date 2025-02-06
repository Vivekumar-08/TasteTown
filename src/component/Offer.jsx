import React from 'react'
import { offer__list } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Offer() {
  return (
    <>
      <section className='offers' id='offer'>
        <div className="offer__container">
          <div className="offer__content">
            <h1 className="offer__heading__title">Special Offers</h1>
            <p className="offer__heading__subtitle">Delicious Deals Near You – Order Now & Save Big! 🍔</p>
          </div>
          <div className="offer__list__data">
            {offer__list.map((item, index) => {
              return (
                <div key={index} className="offer__list__data__item">
                  <div className="offer__image"><p className='offer__name'>{item.offer__name}</p></div>
                  <div className="offer__bottom__content">
                    <div className="offer__discount__price">{item.offer__price__discount}</div>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
