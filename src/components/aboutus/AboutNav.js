import React from 'react'
import { routing } from '../../configurations/routing';
import NavItem from '../NavItem';
import AboutBg from './AboutBg';

const AboutNav = () => {
    return (
        <div class="container-xxl position-relative p-0">
            <NavItem />
            {
                /*
                <div class="container-xxl py-5 bg-primary hero-header mb-5">
                <div class="container my-5 py-5 px-lg-5">
                    <div class="row g-5 py-5">
                        <div class="col-12 text-center">
                            <h1 class="text-white animated zoomIn">A propos de nous ?</h1>
                            <hr class="bg-white mx-auto mt-0" style={{ width: "90px" }} />
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item"><a class="text-white" href="/">Accueil</a></li>
                                    <li class="breadcrumb-item"><a class="text-white" href={`/${routing.aboutus}`}>Pages</a></li>
                                    <li class="breadcrumb-item text-white active" href={`/${routing.aboutus}`} aria-current="page">a prpos de nous </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
                */
            }
            <AboutBg/>
        </div>
    )
}

export default AboutNav;