import { menu__list, menu__list__01 } from '../assets/assets';
export default function Menu() {
    return (
        <>
            <section className="menuBody" id="menu">
                <div className="menu__container">
                    <div className="menu__data">
                        <div className="menu__title">Customer Favorites</div>
                        <div className="menu__subtitle">Discover the best of our menu!</div>
                    </div>
                </div>
                <div className="menu__list__data">
                    {menu__list.map((item, index) => {
                        return (
                            <div
                                key={index} className="menu__list__data__item">
                                <img src={item.menu__image} alt='image' />
                                <p>{item.menu__name}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="menu__list__data">
                    {menu__list__01.map((item, index) => {
                        return (
                            <div
                                key={index} className="menu__list__data__item">
                                <img src={item.menu__image} alt='image' />
                                <p>{item.menu__name}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    );
}
