import React from 'react'
import { routing } from '../configurations/routing'

const NavItem = () => {
    
    return (
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0"
        onLoad={()=>{}}
        >
            <a href="" class="navbar-brand p-0">
                <h1 class="m-0"><i class="fa fa-search me-2"></i>SEO<span class="fs-5">Master</span></h1>
                <img src="img/logo.png" alt="Logo" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse visible" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href={`/`} class="nav-item nav-link active">Accuei</a>
                    <a href={`/${routing.aboutus}`} class="nav-item nav-link">A propos de nous ?</a>
                    <a href={`/${routing.services}`} class="nav-item nav-link">Services</a>
                    <a href={`/${routing.project}`} class="nav-item nav-link">Projects</a>
                    
                </div>
                <butaton type="button" class="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton>
                <a href={`/${routing.contact}`} class="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">Contacter nous </a>
            </div>
        </nav>
    )
}

export default NavItem