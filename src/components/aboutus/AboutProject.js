import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import { LoadAllProjects } from '../../actions/api/project_action';
import { SetInformationProject } from '../../configurations/functionList';
import { responsiveAbout } from '../../configurations/localvalue';
import LoaderItems from '../LoaderItems';

const AboutProject = () => {
    const [projectlist, setprojectlist] = useState([]);
    useEffect(() => {
        LoadAllProjects(setprojectlist);
    }, [])
    return (
        <div class="container-xxl py-5">
            <div class="container px-lg-5">
                <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="position-relative d-inline text-primary ps-4 text-4xl">Projets </h6>
                    <h2 class="mt-2 "></h2>
                </div>
                <div class="portfolio-container row justify-center item-center gap-3 w-full">
                    {
                        projectlist && projectlist.length > 0 ?
                            (
                                projectlist.map((item) => {
                                    return (


                                        <a href={`/${String(item.name).replaceAll(" ", "-")}`} class="h5 d-block text-white mt-1 mb-0"
                                            onClick={() => {
                                                SetInformationProject(String(item._id))
                                            }} className="col-md-3   m-1 bg-white shadow-lg  flex flex-col items-center p-4 rounded-lg">
                                            <img src={item.coverPicture} alt={item.title} className="h-[150px] w-[150px] border border-gray-100  rounded-full mb-4" />
                                            <h2 className="text-2xl font-semibold mb-2 text-center">{item.name}</h2>
                                            <p className="text-gray-500 text-sm text-center">{item.description}</p>

                                        </a>
                                    )
                                })

                            ) :
                            (<LoaderItems />)
                    }
                </div>
            </div>
        </div>
    )
}

export default AboutProject;