import React, { useEffect, useState } from 'react'
import { LoadAllServices } from '../../actions/api/service_action';
import LoaderItems from '../LoaderItems';

const LandingService = () => {
  const [servicelist, setservicelist] = useState([]);
  useEffect(() => {
    LoadAllServices(setservicelist);
  }, [])

  return (
    <div class="container-xxl py-5">
      <div class="container px-lg-5">
        <div class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
          <h6 class="position-relative d-inline text-primary ps-4 text-4xl">Services a votre dsiposition</h6>
          <h2 class="mt-2">plus de que vous n{"'"} en demander</h2>
        </div>
        <div class="row g-4">
          {
            servicelist && servicelist.length > 0 ?
              (
                servicelist.map((item) => {
                  return (
                    <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                      <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div class="service-icon flex-shrink-0">
                            <img src={item.coverPicture} class="h-[100px] w-[100px] rounded-[50px]"/>
                        </div>
                        <h5 class="mb-3">{item.name}</h5>
                        <p>{item.description}</p>
                        <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
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

export default LandingService