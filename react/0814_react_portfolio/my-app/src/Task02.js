import React, { useState } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Carousel } from 'react-bootstrap';

export default function App() {

    const [dogImages, setDogImages] =  useState([]);

    return (
        <>
        <Button onClick={async () => {
            const response = await axios.get("https://dog.ceo/api/breeds/image/random/3")
            setDogImages(response.data.message)
        }}>Import Image</Button>
        {dogImages ? <Carousel className='w-50'>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={dogImages[0]}
            alt="First slide"
            width="640"
            height="640"
            />
            <Carousel.Caption>
            <h3>첫 번째 슬라이드</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={dogImages[1]}
            alt="Second slide"
            width="640"
            height="640"
            />

            <Carousel.Caption>
            <h3>두 번째 슬라이드</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            /*sample image*/
            src={dogImages[2]}
            alt="Third slide"
            width="640"
            height="640"
            />

            <Carousel.Caption>
            <h3>세 번째 슬라이드</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        : <></> /*or null*/ }
        </>
    );
}
