import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SlideTwo from "../images/office_2.jpg";
import HomepageModelTwo from "../images/homepage_model_2.jpg";
import "./Home.css";
import axios from "axios";

function Home() {

    var [sliderImageArray, setSliderImageArray] = useState([]);

    useEffect(() => {
        axios.get('https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details')
            .then(function (response) {
                // handle success
                console.log(response.data.Details);
                setSliderImageArray(response.data.Details);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    });

    return (
        <div>
            <Carousel>
                {sliderImageArray.map((component, index) => (
                    <div className='relative-position' key={index}>
                        <img src={component.ImageUrl} width="100%" height="500px" className="image-banner" />
                        <div className="overlapped-position">
                            <h2>{component.Title}</h2>
                            <p>{component.Subtitle}</p>
                            <br></br>
                            <a href="/contact-us" className='main-button'>Contact us</a>
                        </div>
                    </div>
                ))}
            </Carousel>
            <br></br>

            {/* DESKTOP */}
            <div className='grid-container general-padding-large mobile-hidden'>
                <div className='small-margin'>
                    <h2>Justo petentium te vix, scripta regione urbanitas</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                    <ul className='small-left-padding'>
                        <li><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></li>
                        <li><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</b></li>
                        <li><b>Lorem ipsum dolor sit amet, consectetur adipiscing</b></li>
                        <li><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</b></li>
                    </ul>
                    <br></br>
                    <a href="" className='main-button'>Learn more</a>
                </div>
                <div className='small-margin'>
                    <img src={SlideTwo} width="100%" height="auto"></img>
                </div>
            </div>

            {/* MOBILE */}
            <div className='grid-container general-padding-large mobile-shown'>
                <div className='small-margin'>
                    <img src={SlideTwo} width="100%" height="auto"></img>
                </div>
                <div className='small-margin'>
                    <h2>Justo petentium te vix, scripta regione urbanitas</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </p>
                    <ul className='small-left-padding'>
                        <li><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></li>
                        <li><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</b></li>
                        <li><b>Lorem ipsum dolor sit amet, consectetur adipiscing</b></li>
                        <li><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</b></li>
                    </ul>
                    <br></br>
                    <a href="" className='main-button'>Learn more</a>
                </div>
            </div>


            <br></br>
            <div className='full-width-container  relative-position'>
                <img src={HomepageModelTwo} width="100%" height="500px" className="image-banner" />
                <div className="overlapped-position-small-top grid-container">
                    <div className='small-margin dark-background medium-padding'>
                        <h2>Lorem ipsum dolor</h2>
                        <p>
                            Quem vide tincidunt pri ei, id mea omnium denique Quem vide tincidunt pri ei,
                            id mea omnium denique Quem vide tincidunt pri ei, id mea omnium denique Quem
                            vide tincidunt pri ei, id mea omnium denique Quem vide tincidunt pri ei, id
                            mea omnium denique Quem vide tincidunt pri ei, id mea omnium denique Quem vide
                            tincidunt pri ei, id mea omnium denique Quem vide tincidunt pri ei, id mea
                            omnium denique
                        </p>
                        <br></br>
                        <a href="" className='main-button-inverted'><b>Log in</b></a>
                    </div >
                    <div className='small-margin'>

                    </div>
                </div>
            </div>
            <br></br>
            <div className='align-center'>
                <h2>Sed libero justo, loborti sit amet suscipit non</h2>
                <p><b>taria duo ut vis semper abhorreant</b></p>
            </div>
            <div className='grid-container-three general-padding'>
                <div className='small-margin'>
                    <p>
                        <b>Quem vide tincidunt pri ei, id mea omnium denique Quem vide tincidunt pri ei,
                            id mea omnium denique Quem vide tincidunt pri ei, id mea omnium denique Quem
                            vide tincidunt pri ei, id mea omnium denique Quem vide tincidunt pri ei, id
                            mea omnium denique Quem vide tincidunt pri ei, id mea omnium denique Quem vide
                            tincidunt pri ei, id mea omnium denique Quem vide tincidunt pri ei, id mea
                            omnium denique</b>
                    </p>
                    <p>
                        Quem vide tincidunt pri ei, id mea omnium denique Quem vide tincidunt pri ei,
                        id mea omnium denique Quem vide tincidunt pri ei, id mea omnium denique Quem
                        vide tincidunt pri ei
                    </p>
                </div>
                <div className='small-margin'>
                    <p>
                        Quem vide tincidunt pri ei, id mea omnium denique Quem vide tincidunt pri ei,
                        id mea omnium denique Quem vide tincidunt pri ei, id mea omnium denique Quem
                        vide tincidunt pri ei, id mea omnium denique Quem vide tincidunt pri ei, id
                        mea omnium denique Quem vide tincidunt pri ei, id mea omnium denique Quem vide
                        tincidunt pri ei, id mea omnium denique Quem vide tincidunt pri ei, id mea
                        omnium denique
                    </p>
                    <p>
                        Quem vide tincidunt pri ei, id mea omnium denique Quem vide tincidunt pri ei,
                        id mea omnium denique Quem vide tincidunt pri ei, id mea omnium denique Quem
                        vide tincidunt pri ei tincidunt pri ei, id mea omnium denique Quem
                    </p>
                </div>
                <div className='small-margin'>
                    <p>
                        Quem vide tincidunt pri ei, id mea omnium denique Quem vide tincidunt pri ei,
                        id mea omnium denique Quem vide tincidunt pri ei, id mea omnium denique Quem vide
                        tincidunt pri ei, id mea omnium denique Quem vide tincidunt pri ei, id mea omnium
                        denique Quem vide tincidunt pri ei, id mea omnium denique Quem vide
                        tincidunt pri ei, id mea omnium denique Quem vide tincidunt pri ei, id mea
                        omnium denique Quem vide tincidunt pri ei, id mea omnium denique Quem vide tincidunt pri ei,
                        id mea omnium denique Quem vide tincidunt pri ei, id mea omnium denique Quem
                        vide tincidunt pri ei Quem vide tincidunt pri ei, id mea omnium denique Quem
                        vide tincidunt pri ei
                    </p>
                </div>
            </div>
            <div className='align-center'>
                <a href='/contact-us' className='main-button'>Contact us</a>
            </div>
            <br></br>
        </div>
    );

}

export default Home;