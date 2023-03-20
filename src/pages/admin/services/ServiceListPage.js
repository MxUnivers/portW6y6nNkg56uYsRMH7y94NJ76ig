import React, { useEffect, useState } from 'react'
import { AiOutlineStop } from 'react-icons/ai';
import { LoadAllServices } from '../../../actions/api/service_action';
import LoaderItems from '../../../components/LoaderItems';
import { SetInformationService } from '../../../configurations/functionList';
import { routing } from '../../../configurations/routing';

const ServiceListPage = () => {
  const [servicelist, setservicelist] = useState([]);

  useEffect(() => {
    LoadAllServices(setservicelist);
  }, [])

  return (
    <div class="h-full ml-14 mt-14 mb-10 md:ml-64">



      <div class="flex-1 px-2 sm:px-3 p-4">
        <div class="flex justify-between items-center">
          <h3 class="text-3xl font-extralight text-white/50">Liste des services</h3>
          <div class="inline-flex items-center space-x-2">
            <div><input type="text" class="py-2 px-3 text-gray-600 rounded-lg" placeholder="recherche ..." /></div>
            <a class="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </a>
          </div>
        </div>
        <div class="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <a href={`/${routing.admin}/${routing.serviceadd}`} class="group bg-gray-900/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover">
            {/* Nouveau service sutsite web  */}
            <a href={`/${routing.admin}/${routing.serviceadd}`} class="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center" >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </a>
            <a class="text-white/50 group-hover:text-white group-hover:smooth-hover text-center"
              href={`/${routing.admin}/${routing.serviceadd}`}
            >Nouveau service</a>
          </a>
          {
            servicelist && servicelist.length > 0 ?
              (
                servicelist.map((item) => {
                  return (
                    <div class="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                      <img class="w-20 h-20 object-cover object-center rounded-full" src={`${item.coverPicture}`} alt="cuisine" />
                      <h4 class="text-white text-2xl font-bold capitalize text-center">{item.name}</h4>
                      <p class=" flex space-x-2 text-white/50">
                        <a href={`/${routing.admin}/${routing.serviceedit}/${item._id}`} class="bg-lime-500 hover:bg-lime-600 active:bg-lime-700 py-1 px-2 rounded-lg text-white"
                          onClick={()=>{SetInformationService(String(item._id))}}>
                          edit</a>
                        <a href={`/${routing.admin}/${routing.servicedelete}/${item._id}`} class="bg-red-500 hover:bg-red-600 active:bg-red-700 py-1 px-2 rounded-lg text-white"
                          onClick={()=>{SetInformationService(String(item._id))}}>
                          delete</a>
                      </p>
                      <p class="absolute top-2 text-white/20 inline-flex items-center text-xs">service <span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
                    </div>
                  )
                })
              ) :
              (
                <div class="group bg-gray-900/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/40 hover:smooth-hover">
                  {/* Nouveau service sutsite web  */}
                  <div class="bg-gray-900/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center" >
                    <AiOutlineStop class="h-10 w-10" />
                  </div>
                  <div class="text-white/50 group-hover:text-white group-hover:smooth-hover text-center"

                  >Aucun service</div>
                </div>
              )
          }

        </div>
      </div>


    </div>
  )
}

export default ServiceListPage;