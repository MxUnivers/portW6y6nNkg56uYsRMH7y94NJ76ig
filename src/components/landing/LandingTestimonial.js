import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { responsivetestimonial } from '../../configurations/localvalue';

const LandingTestimonial = () => {
    return (
        <div class="container-xxl bg-primary testimonial py-5 my-5 wow fadeInUp visible " data-wow-delay="0.1s" >
            <div class="flex flex-wrap justify-center items-center">
                <h2 class="text-3xl text-white py-3">☺ Avis positifs</h2>
            </div>
            <div class="container py-5 px-lg-5 visible" >

                <Carousel responsive={responsivetestimonial}
                    infinite={true}
                    autoPlay={true} transitionDuration={"2"}
                    class="carousel testimonial-carousel visible" >


                    <div class=" testimonial-item bg-transparent border rounded text-white p-4 visible" >
                        <i class="fa fa-quote-left fa-2x mb-3"></i>
                        <p>J{"'"} services plus tôt attrayant et éfficace</p>
                        <div class="d-flex align-items-center visible">
                            <img class="img-fluid flex-shrink-0 rounded-circle visible" src="https://site-web-b2i-solutions.web.app/images/logo-b2i.png" style={{ width: "50px", height: "50px" }} />
                            <div class="ps-3">
                                <h6 class="text-white mb-1"></h6>
                                <small>B2I GROUP</small>
                            </div>
                        </div>
                    </div>

                    
                </Carousel>
            </div>
        </div>
    )
}

export default LandingTestimonial