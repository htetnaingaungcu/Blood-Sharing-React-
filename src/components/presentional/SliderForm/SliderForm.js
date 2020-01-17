import React from "react";
import { BrowserRouter as Redirect, Router, Route, Link } from "react-router-dom";

import { connect } from "react-redux"; 


class SliderForm extends React.Component {

    render() {
        return (

            <div class="swiper-container">

                <div class="swiper-wrapper">

                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                    ...
                </div>

                <div class="swiper-pagination"></div>

                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>

                <div class="swiper-scrollbar"></div>
            </div>
        );
    }
}

export default SliderForm;