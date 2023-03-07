import React, { useEffect } from 'react'
import Retour from '../../../configurations/functionList'
import { useQuill } from 'react-quilljs';

const ProjectAddPage = () => {
    const { quill, quillRef, Quill } = useQuill();
    // useEffect(() => {
    //     if (quill) {
    //         quill.clipboard.dangerouslyPasteHTML('<h1>Bonne rédaction</h1>');
    //     }
    // }, [quill]);
    return (
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">

            <button type="button" class="bg-gray-300 text-gray-600  py-2 px-3 rounded-lg "
                onClick={Retour}

            >retour</button>

            {/* form Add Services */}

            <div class="flex items-center justify-center p-12 rounded-lg">
                <div class="mx-auto w-full  bg-gray-800 rounded-lg">
                    <div class="p-3  bg-gray-100 rounded-t-lg">
                        <h2 class="text-3xl text-gray-500 ">Ajouter un nouveau projet ...</h2>
                    </div>
                    <form
                        class="py-6 px-9"
                    >
                        <div class="mb-5">
                            <label
                                for="email"
                                class="text-gray-100 mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Nom du service  :
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="nom du service"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div class="mb-6 pt-4 ">
                            <label class="text-gray-100 mb-5 block text-xl font-semibold text-[#07074D]">
                                Fichier image :
                            </label>

                            <div class="mb-8 bg-gray-100">
                                <input type="file" name="file" id="file" accept=".JPEG,.PNG,.JPG" class="sr-only" />
                                <label
                                    for="file"
                                    class="relative cursor-pointer flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                                >
                                    <div>
                                        <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                                            Drop files here
                                        </span>
                                        <span class="mb-2 block text-base font-medium text-[#6B7280]">
                                            Or
                                        </span>
                                        <span
                                            class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                                        >
                                            Browse PNG , JPEG  , JPG
                                        </span>
                                    </div>
                                </label>
                                <img class="h-[100px] w-[100px] rounded-lg" src='https://images.pexels.com/photos/8166778/pexels-photo-8166778.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
                            </div>

                            <div class="mb-5">
                                <label
                                    for="email"
                                    class="text-gray-100 mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Description du service  :
                                </label>
                                <textarea
                                    type="email"
                                    name="email"
                                    value="description su service"
                                    id="email"
                                    placeholder="description du service"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            {/* quill js */}
                        </div>
                        <div class="mb-5">
                            <label for="email" class="text-gray-100 mb-3 block text-base font-medium text-[#07074D]">
                                plus de details sur le projet : 
                            </label>
                            <textarea type={"text"} placeholder="ecrire ici ..." class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>

                        <div>
                            <button
                                type="submit"
                                class="hover:shadow-form w-full rounded-md bg-gray-500 hover:bg-gray-600 active:bg-gray-700 py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                + Ajouter nouveau projet
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* End form Add Services */}

        </div>
    )
}

export default ProjectAddPage;