import React from 'react'
import { bgColor, bgImg } from '../../configurations/localvalue';
import { routing } from '../../configurations/routing';

const LandingImageBg = () => {
  return (
    <div class={`container-xxl py-5 ${bgColor.bg} rounded-b-[30%] hero-header mb-5`} >
      <div class="container my-5 py-5 px-lg-5">
        <div class="row g-5 py-5">
          <div class="col-lg-6 text-center text-lg-start">
            <h1 class="text-white mb-4 animated text-4xl font-thin fadeInUp">Explorez l{"'"}Excellence et la Créativité à travers mon Portfolio .</h1>
            <p class="text-white pb-3 animated fadeInUp">Bienvenue dans mon univers numérique où l'engagement envers l'excellence rencontre la passion pour la création.</p>
            <a href={`/${routing.project}`} class="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated fadeInLeft">Découvrir mes Projets</a>
            <a href={`/${routing.contact}`} class="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated fadeInRight">Contactez-nous dès maintenant</a>
          </div>
          <div class="col-lg-6 text-center text-lg-start">
            <img class="img-fluid rounded-2xl" src={`${bgImg.landingBg1}`} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingImageBg;