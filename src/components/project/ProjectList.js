import React, { useEffect, useState } from 'react'
import { LoadAllProjectById, LoadAllProjects } from '../../actions/api/project_action';
import { SetInformationProject } from '../../configurations/functionList';
import { localvalue } from '../../configurations/localvalue';
import { routing } from '../../configurations/routing';
import LoaderItems from '../LoaderItems';

const ProjectList = () => {
    var  id  = localStorage.getItem(`${localvalue.idProject}`);
    const [projectlist, setprojectlist] = useState([]);
    useEffect(() => {
        LoadAllProjects(setprojectlist);
    }, [])
    return (
        <div class="container-xxl py-5">
            <div class="container px-lg-5">
                <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 class="position-relative d-inline text-primary ps-4 text-4xl">Tout les projets </h6>
                    <h2 class="mt-2">listes des projets réalisés</h2>
                </div>
                {
                    /*
                    
                    <div class="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="col-12 text-center">
                        <ul class="list-inline mb-5" id="portfolio-flters">
                            <li class="btn px-3 pe-4 active" data-filter="*">All</li>
                            <li class="btn px-3 pe-4" data-filter=".first">Design</li>
                            <li class="btn px-3 pe-4" data-filter=".second">Development</li>
                        </ul>
                    </div>
                    </div>

                    */
                }
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
                                                        <a class="h5 d-block text-white mt-1 mb-0" href={`/${String(item.name).replaceAll(" ","-")}`}
                                                        onClick={()=>{
                                                            SetInformationProject(String(item._id))
                                                        }}
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

export default ProjectList;
