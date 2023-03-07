import React from 'react'
import NavItem from '../NavItem'

const ServiceNav = () => {
  return (
    <div class="container-xxl position-relative p-0">
            <NavItem/>

            <div class="container-xxl py-5 bg-primary hero-header mb-5">
                <div class="container my-1 py-5 px-lg-5">
                    <div class="row g-5 py-5">
                        <div class="col-12 text-center">
                            <h1 class="text-white animated zoomIn">Nos Services</h1>
                            <hr class="bg-white mx-auto mt-0" style={{width: "90px"}}/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ServiceNav
