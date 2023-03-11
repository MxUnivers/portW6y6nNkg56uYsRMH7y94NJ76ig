import React from 'react'
import { bgImg } from '../../configurations/localvalue'

const LandingStarted = () => {
    return (
        <div class="container-xxl bg-primary newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container px-lg-5">
                <div class="row align-items-center" style={{height: "250px"}}>
                    <div class="col-12 col-md-6">
                        <h3 class="text-white text-2xl">Envoyer nous votre email</h3>
                        <small class="text-white">contacter nous vite !</small>
                        <div class="position-relative w-100 mt-3">
                            <input type="email" class="form-control border-0 rounded-pill w-100 ps-4 pe-5"  placeholder="Enter Your Email" style={{height: "48px"}} />
                            <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i class="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                    <div class="col-md-6 text-center mb-n5 d-none d-md-block">
                        <img class="img-fluid mt-5 rounded-2xl shadow-sm" style={{height: "250px"}} src={bgImg.landingBg3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingStarted