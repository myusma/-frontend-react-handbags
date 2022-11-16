import React from 'react';
import './App.css';
import Button from "./components/Button";
import Tile from "./components/Tile";
import Product from "./components/Product";
import bagOne from "./assets/bag_1.png"
import bagTwo from "./assets/bag_2.png"
import bagThree from "./assets/bag_3.png"
import bagFour from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"



function App() {
    return (
        <>

            <h1>Handbags & Purses</h1>

            <nav>
                <Button click={() => console.log('to the collection')}>to the collection</Button>
                <Button click={() => console.log('shop all bags')}>shop all bags</Button>
                <Button disabled={true} click={() => console.log('pre-orders')}>pre-orders</Button>
            </nav>


            <main>
                <Product
                    label='Best seller'
                    imageBag={bagOne}
                    bagName='The handy bag'
                    price='€400,'
                />
                <Product
                    label='Best seller'
                    imageBag={bagTwo}
                    bagName='The stylish bag'
                    price='€250,'
                />
                <Product
                    label='New collection'
                    imageBag={bagThree}
                    bagName='The simple bag'
                    price='€300,'
                />
                <Product
                    label='New collection'
                    imageBag={bagFour}
                    bagName='The simple bag'
                    price='€150,'
                />


            </main>


            <footer>
                <Tile
                    title='THE BRAND'
                    parOne='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate fuga nulla officia optio
                        quam quisquam repudiandae tenetur ullam voluptate'
                    parTwo='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate fuga nulla officia optio
                        quam quisquam repudiandae tenetur ullam voluptate'
                />
                <Tile
                    image={brand}
                    alt='brand'
                />
                <Tile
                    title='OUR STORY'
                    parOne='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate fuga nulla officia optio
                        quam quisquam repudiandae tenetur ullam voluptate'
                    parTwo='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate fuga nulla officia optio
                        quam quisquam repudiandae tenetur ullam voluptate'
                />
                <Tile
                    image={ourStory}
                    alt='ourStory'
                />

            </footer>


        </>
    );
}

export default App;



