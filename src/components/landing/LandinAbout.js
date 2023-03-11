import React from 'react'
import { bgImg } from '../../configurations/localvalue'

const LandinAbout = () => {
    return (
        <div class="container-xxl py-5">
            <div class="container px-lg-5">
                <div class="row g-5">
                    <div class="col-lg-6">
                        <img class="img-fluid wow zoomIn rounded-3xl" data-wow-delay="0.5s" src={bgImg.landingBg2} />
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="section-title position-relative mb-4 pb-2">
                            <h6 class="position-relative text-primary ps-4 text-3xl">Accompagnement  Projet web , application mobile , Projet Deisgn et Illustration</h6>
                            <h2 class="mt-2 text-xl">Nous sommes ravis de vous compter parmi nous </h2>
                        </div>
                        <p class="mb-4">
                           Developper votre buisness au travers de creatation de votre plateforme web , peut vous booster votre activité
                         </p>
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <h6 class="mb-3"><i class="fa fa-check text-primary me-2"></i>Statifaction</h6>
                                <h6 class="mb-0"><i class="fa fa-check text-primary me-2"></i>expérience professionel</h6>
                            </div>
                            <div class="col-sm-6">
                                <h6 class="mb-3"><i class="fa fa-check text-primary me-2"></i>9/10 notes</h6>
                                <h6 class="mb-0"><i class="fa fa-check text-primary me-2"></i>Fiablités</h6>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mt-4">
                            <a class="btn btn-primary rounded-pill px-4 me-3" href="">Demander votre solution</a>
                            <a class="btn btn-outline-primary btn-square me-3" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-primary btn-square me-3" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-primary btn-square me-3" href=""><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-outline-primary btn-square" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LandinAbout
