import React from 'react'
import { useNavigate } from 'react-router-dom';
import { DeleteProject } from '../../../actions/api/project_action';
import Retour from '../../../configurations/functionList'
import { localvalue } from '../../../configurations/localvalue'

const ProjectDelete = () => {
    const redirect  = useNavigate();

    var  id =  localStorage.getItem(localvalue.idProject);
  return (
    <div class="h-full ml-14 mt-14 mb-10 md:ml-64">

            <div class=" relative grid min-h-screen place-items-center">
                <div class=" bg-gray-600 w-3/3 p-12  sm:w-3/3 md:w-3/3 lg:w-2/3">
                    <h1 class=" text-2xl font-semibold">Supprimer cet Projet</h1>
                    <p>cet projet sera supprimer * </p>
                    <form class="mt-6" onSubmit={
                        (e)=>{
                            e.preventDefault();
                            DeleteProject(id, redirect);
                        }
                    }>
                        <div class="flex flex-row space-x-3">
                            <button type="button" class="w-full py-3 mt-6 font-medium tracking-widest text-gray-800 uppercase bg-gray-300 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
                                onClick={Retour}
                            >
                                Retour
                            </button>
                            <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-red-700 shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                                Supprimer propjet
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default ProjectDelete ;