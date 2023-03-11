import React from 'react'
import Carousel from 'react-multi-carousel'
import { responsivetestimonial } from '../../configurations/localvalue'

const AboutTestimonial = () => {
  return (
    <div class="container-xxl bg-primary testimonial py-5 my-5 wow fadeInUp visible " data-wow-delay="0.1s" >
            <div class="flex flex-wrap justify-center items-center">
                <h2 class="text-3xl text-white py-3">☺ Avis des clients</h2>
            </div>
            <div class="container py-5 px-lg-5 visible" >

                <Carousel responsive={responsivetestimonial} 
                infinite={true}
                autoPlay={true} transitionDuration={"2"}  
                class="carousel testimonial-carousel visible" >
                    <div class=" testimonial-item bg-transparent border rounded text-white p-4 visible" >
                        <i class="fa fa-quote-left fa-2x mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div class="d-flex align-items-center visible">
                            <img class="img-fluid flex-shrink-0 rounded-circle visible" src="img/testimonial-1.jpg" style={{ width: "50px", height: "50px" }} />
                            <div class="ps-3">
                                <h6 class="text-white mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-transparent border rounded text-white p-4">
                        <i class="fa fa-quote-left fa-2x mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" style={{ width: "50px", height: "50px" }} />
                            <div class="ps-3">
                                <h6 class="text-white mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-transparent border rounded text-white p-4">
                        <i class="fa fa-quote-left fa-2x mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" style={{ width: "50px", height: "50px" }} />
                            <div class="ps-3">
                                <h6 class="text-white mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div class="testimonial-item bg-transparent border rounded text-white p-4">
                        <i class="fa fa-quote-left fa-2x mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div class="d-flex align-items-center">
                            <img class="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" style={{ width: "50px", height: "50px" }} />
                            <div class="ps-3">
                                <h6 class="text-white mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
  )
}

export default AboutTestimonial