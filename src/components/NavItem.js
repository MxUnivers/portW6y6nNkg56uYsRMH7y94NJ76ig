import axios from 'axios';
import React, { useEffect } from 'react'
import { bgImg } from '../configurations/localvalue'
import { routing } from '../configurations/routing'
import { useLocation } from 'react-router-dom';

const NavItem = () => {
    const  location =  useLocation();
    
    useEffect(() => {
        axios.post('/api/v1/visit');
      }, []);
    return (
        <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0"
        onLoad={()=>{}}
        >
            <a href={`/`} class="navbar-brand p-0 ">
                <h1 class="m-0 flex flex-row space-x-2 justify-center items-center"><img src={`${bgImg.logo}`} class="rounded-[50%]" alt="Logo" /> 
                <span class="fs-5 font-sans">MxUnivers</span>
                </h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse visible" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <a href={`/`} class={`${location.pathname=== "/" ? "nav-item nav-link active": "nav-item nav-link"}`}>Accueil</a>
                    <a href={`/${routing.aboutus}`} class={`${location.pathname=== "/"+routing.aboutus ? "nav-item nav-link active": "nav-item nav-link"}`}>A propos </a>
                    <a href={`/${routing.services}`} class={`${location.pathname=== "/"+routing.services ? "nav-item nav-link active": "nav-item nav-link"}`}>Services</a>
                    <a href={`/${routing.project}`} class={`${location.pathname=== "/"+routing.project ? "nav-item nav-link active": "nav-item nav-link"}`}>Projects</a>
                    
                </div>
                {/*<butaton type="button" class="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton>
                 */}
                <a href={`/${routing.contact}`} class="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">Contacter nous </a>
            </div>
        </nav>
    )
}

export default NavItem