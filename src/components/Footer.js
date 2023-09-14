import React from 'react'
import { routing } from '../configurations/routing'

const Footer = () => {
    return (
        <div class="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5 px-lg-5">
                <div class="row g-5">
                    <div class="col-md-6 col-lg-3">
                        <h5 class="text-white mb-4">Get In Touch</h5>
                        <p><i class="fa fa-map-marker-alt me-3"></i></p>
                        <p><i class="fa fa-phone-alt me-3"></i><a href="tel:+2250595387052">+2250595387052</a></p>
                        <p><i class="fa fa-envelope me-3"></i><a href='mailto:mxunivers47@gmail.com'>mxunivers47gmail.com</a></p>
                        <div class="d-flex pt-2">
                        {
                            /*
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            */
                        }
                            <a href="https://www.facebook.com/ble.koffi.1238" class="btn btn-outline-light btn-social" ><i class="fab fa-facebook-f"></i></a>
                            <a href="https://www.youtube.com/channel/UCj6DdnjLGBFSj0pc7KzCuzQ" class="btn btn-outline-light btn-social" target='_blank'><i class="fab fa-youtube"></i></a>
                            {
                                /*
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-instagram"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                                */
                            }
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <h5 class="text-white mb-4">Liens utile</h5>
                        <a class="btn btn-link" href={`/${routing.aboutus}`}>A propos </a>
                        <a class="btn btn-link" href={`/${routing.contact}`}>Contact nous</a>
                        <a class="btn btn-link" href={`/${routing.project}`}>Projets</a>
                        <a class="btn btn-link" href={`/${routing.services}`}>Services</a>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <h5 class="text-white mb-4">Projets en cours</h5>
                        <div class="row g-2">
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-1.jpg" alt="Image" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-2.jpg" alt="Image" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-3.jpg" alt="Image" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-4.jpg" alt="Image" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-5.jpg" alt="Image" />
                            </div>
                            <div class="col-4">
                                <img class="img-fluid" src="img/portfolio-6.jpg" alt="Image" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <h5 class="text-white mb-4">news</h5>
                        <p>mxunivers47@gmail.com</p>
                        <div class="position-relative w-100 mt-3">
                            <input class="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Votre email" style={{ height: "48px" }} />
                            <button type="button" class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i class="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container px-lg-5">
                <div class="copyright">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a class="border-bottom" href="#">Aymar-mxunivers</a>, All Right Reserved.

                            Designed By <a class="border-bottom" 
                            href="https://www.facebook.com/ble.koffi.1238"
                            >Aymar Bly</a>
                        </div>
                        <div class="col-md-6 text-center text-md-end">
                            <div class="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer