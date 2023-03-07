import React from 'react'
import { MdAddAPhoto } from 'react-icons/md';
import Retour from '../../../configurations/functionList';

const FormService = () => {
  return (
    <div class="container-fluid">

            <div class="container-fluid py-12 bg-gray-700 dark:bg-gray-900 transition duration-150 ease-in-out z-10  bottom-0 left-0" id="modal">
                <div role="alert" class="container-fluid w-full ">
                    <div class="w-full container-fluid relative py-8 px-5 md:px-10 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
                        <div class="w-full flex flex-row  justify-start text-gray-600 mb-3">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/left_aligned_form-svg1.svg" alt="icon" />
                            <h2 class="text-gray-300 text-3xl">Service </h2>
                        </div>

                        <div class="p-1">
                            <div class="py-1 px-2 bg-gray-700">
                                <h2>Activté 1</h2>
                            </div>
                            <div class="">
                                <label for="name" class="text-gray-800 dark:text-white  text-sm font-bold leading-tight tracking-normal">Titre de présentation</label>
                                <input type="text" id="name" class="mb-5 mt-2 text-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-200 dark:border-gray-700 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" />
                            </div>
                            <div class="">
                                <label for="name" class="text-gray-800 dark:text-white  text-sm font-bold leading-tight tracking-normal">Description de présentation</label>
                                <textarea class="mb-5 mt-2 text-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-200 dark:border-gray-700 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" />
                            </div>

                            <div class="h-[70px] w-[70px] bg-gray-200 ">
                                <label class="w-[70px] h-[70px]  bg-gray-400 text-gray-800 dark:text-white  text-sm font-bold leading-tight tracking-normal">
                                    <input type='file' accept=".JPEG, .JPG , .PNG" class="sr-only" />
                                    <MdAddAPhoto
                                        class="h-[50px] w-[50px] rounded-lg text-gray-700" />
                                </label>
                            </div>

                        </div>

                        <div class="p-1">
                            <div class="py-1 border-t px-2 bg-gray-700">
                                <h2>Activté 2</h2>
                            </div>
                            <div class="">
                                <label for="name" class="text-gray-800 dark:text-white  text-sm font-bold leading-tight tracking-normal">Titre de présentation</label>
                                <input type="text" id="name" class="mb-5 mt-2 text-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-200 dark:border-gray-700 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" />
                            </div>
                            <div class="">
                                <label for="name" class="text-gray-800 dark:text-white  text-sm font-bold leading-tight tracking-normal">Description de présentation</label>
                                <textarea class="mb-5 mt-2 text-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-200 dark:border-gray-700 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="James" />
                            </div>
                        </div>

                        <div class="flex items-center justify-start w-full">
                            <button class="w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                                Enregistrer
                            </button>
                            <button onClick={Retour} class="w-full focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onclick="modalHandler()">
                                Retour
                            </button>
                        </div>
                        <button class="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onclick="modalHandler()" aria-label="close modal" role="button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>



        </div>
  )
}

export default FormService;