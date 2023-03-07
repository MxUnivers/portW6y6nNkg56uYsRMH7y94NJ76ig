
import React, { useState } from 'react';
import AboutComponent from '../components/aboutus/AboutComponent';
import AboutNav from '../components/aboutus/AboutNav';
import AboutTeam from '../components/aboutus/AboutTeam';

const AboutUsPage = () => {
    const [AboutList, setAboutList] = useState([1,1,1,1]);
    return (
        <>
         <AboutNav/>
         {
            AboutList.map(()=>{
                return(
                    <AboutComponent title={"Composant "}/>
                )
            })
         }
         <AboutTeam/>
        </>
    )
}
export default AboutUsPage ;