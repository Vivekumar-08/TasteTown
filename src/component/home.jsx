import home from '../assets/home.jpg';
export default function Home() {
    return (
        <>
            <section className="home" id="home">
                <div className="home__container">
                    <div className="home__data">
                        <div className="home__title">Where Every Meal Tells a Story 🍴✨ – Explore 🌍, Cook 🍳, and Savor Delicious Moments 🍽️❤️!</div>
                        <div className="home__subtitle">Your guide to unforgettable flavors 🍲, culinary tips 👨‍🍳, and recipes made to delight 🍽️✨.</div>
                        <button className='order'>Order Now</button>
                    </div>
                    <div className="home__img">
                        <img src={home} alt="home" />
                    </div>
                </div>
            </section>
            <div className="divider"></div>
        </>
    );
}