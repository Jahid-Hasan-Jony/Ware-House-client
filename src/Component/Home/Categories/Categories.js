import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Categories.css'


const Categories = () => {
    const options = {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        }
    }
    return (
        <div className='py-3'>
            <h1 className='text-center py-3'>Categories</h1>
            <OwlCarousel
                margin={10}
                className='owl-theme'
                responsive={options}
                items='3'
                center="true"
                autoplay
                loop
            >
                <div class="card" style={{ width: "18rem" }}>
                    <img class="card-img-top w-100" src="https://i.ibb.co/gMxywZD/food-png-2945.png" alt="" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Vagitable</h5>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem" }}>
                    <img class="card-img-top w-100" src="https://i.ibb.co/nDwhLy7/6-2-fruit-png-picture.png" alt="" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Fruits</h5>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem" }}>
                    <img class="card-img-top w-100" src="https://i.ibb.co/PQP7JM2/background-beef-chop-closeup-cooking-cut-food-604240.jpg" alt="" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Non-vegetarian</h5>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem" }}>
                    <img class="card-img-top w-100" src="https://i.ibb.co/C0jrMqv/kisspng-fizzy-drinks-coca-cola-juice-fanta-sprite-cold-drink-5ac097616fd0a5-817838961522571105458.png" alt="" />
                    <div class="card-body">
                        <h5 class="card-title text-center">Soft Drinks</h5>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    );
};

export default Categories;