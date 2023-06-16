
import React, { useState } from 'react';
import AboutComponent from '../components/aboutus/AboutComponent';
import AboutNav from '../components/aboutus/AboutNav';
import AboutProject from '../components/aboutus/AboutProject';
import AboutTeam from '../components/aboutus/AboutTeam';
import AboutTestimonial from '../components/aboutus/AboutTestimonial';

const AboutUsPage = () => {
    const [AboutList, setAboutList] = useState([1,1,1,1]);
    return (
        <>
         <AboutNav/>
         <AboutComponent title={"En savoir plus sur moi "}/>
         <AboutProject/>
         {
            /*<AboutTestimonial/> */
         }
         {/*<AboutTeam/> */}
        </>
    )
}
export default AboutUsPage ;