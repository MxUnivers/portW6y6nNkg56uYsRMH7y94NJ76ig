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
                    <h6 class="position-relative d-inline text-primary ps-4 text-4xl">Plus de 10 projets réalisés</h6>
                    <h2 class="mt-2 ">Projets réalisés</h2>
                </div>
                <div class="row g-4 portfolio-container">
                    {
                        projectlist && projectlist.length > 0 ?
                            (
                                projectlist.map((item) => {
                                    return (
                                        <div class="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s">
                                            <div class="position-relative rounded overflow-hidden">
                                                <img class="img-fluid w-100" src={item.coverPicture} alt="" />
                                                <div class="portfolio-overlay">
                                                    <a class="btn btn-light" href={item.coverPicture} data-lightbox="portfolio"><i class="fa fa-plus fa-2x text-primary"></i></a>
                                                    <div class="mt-auto">
                                                        <small class="text-white"><i class="fa fa-folder me-2"></i>Web Design</small>
                                                        <a href={`/${String(item.name).replaceAll(" ", "-")}`} class="h5 d-block text-white mt-1 mb-0"
                                                            onClick={() => { SetInformationProject(String(item._id)) }}
                                                        >{item.name}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })

                            ) :
                            (
                                <LoaderItems />
                            )

                    }

                </div>
            </div>
        </div>
    )
}

export default AboutProject;