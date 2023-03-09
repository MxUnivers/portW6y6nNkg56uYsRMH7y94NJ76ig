import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UpdateProject } from '../../../actions/api/project_action';
import { baseurl } from '../../../configurations/baseUrl';
import Retour from '../../../configurations/functionList'
import { localvalue } from '../../../configurations/localvalue';

const ProjectEditPage = () => {
    const redirect  = useNavigate();

    var id = localStorage.getItem(localvalue.idProject);

    const [name, setname] = useState("");
    const [coverPicture, setcoverPicture] = useState("");
    const [description, setdescription] = useState("");
    const [content, setcontent] = useState("");
    const [visible, setvisible] = useState(true);
    const [video, setvideo] = useState("");


    const [Loading, setLoading] = useState();
    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader(); fileReader.readAsDataURL(file); fileReader.onload = () => { resolve(fileReader.result); };
        fileReader.onerror = (error) => { reject(error); };
      });
    }
    function uploadSinglePhoto(base64) {
      setLoading(true);
      axios.post(`${baseurl.urlapi}/uploadImage`, { image: base64 })
        .then((res) => { setcoverPicture(res.data); alert("image uploaded Succesfully"); })
        .then(() => setLoading(false))
        .catch(console.log);
    }
    const HandleFileInputChangePhoto = async (event) => {
      const files = event.target.files;
      console.log(files.length);
      if (files.length === 1) {
        const base64 = await convertBase64(files[0]);
        uploadSinglePhoto(base64); return;
      }
      const base64s = [];
      for (var i = 0; i < files.length; i++) { var base = await convertBase64(files[i]); base64s.push(base); }
    };



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
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        UpdateProject(id, name, coverPicture, description, content, visible,redirect)
                    }}
                        class="py-6 px-9"
                    >
                        <div class="mb-5 ">
                            <label
                                for="email"
                                class="flex space-x-3 justify-start items-start text-gray-100 mb-3 block text-base font-medium text-[#07074D]"
                            >
                                <input
                                    type="checkbox"
                                    checked={visible} onChange={(e) => { setname(e.target.value) }}
                                    placeholder="nom du projet"
                                    class="rounded-md border h-[19px] w-[20px] border-[#e0e0e0] bg-white py-3 px-1 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                                <p class="text-base">visibilté du prohet sur le site</p>
                            </label>

                        </div>
                        <div class="mb-5">
                            <label
                                for="email"
                                class="text-gray-100 mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Nom du projet  :
                            </label>
                            <input
                                type="text"
                                value={name} onChange={(e) => { setname(e.target.value) }}
                                placeholder="nom du projet"
                                class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div class="mb-6 pt-4 ">
                            <label class="text-gray-100 mb-5 block text-xl font-semibold text-[#07074D]">
                                Fichier image :
                            </label>

                            <div class="mb-8 bg-gray-100">
                                <input onChange={HandleFileInputChangePhoto} type="file" accept=".JPEG,.PNG,.JPG" class="sr-only" />
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
                                <img class="h-[100px] w-[100px] rounded-lg" src={coverPicture} />
                            </div>

                            <div class="mb-5">
                                <label
                                    class="text-gray-100 mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Description du service  :
                                </label>
                                <textarea
                                    value={description} onChange={(e) => { setdescription(e.target.value) }}
                                    placeholder="description du service"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            {/* quill js */}
                        </div>
                        <div class="mb-5">
                            <label class="text-gray-100 mb-3 block text-base font-medium text-[#07074D]">
                                plus de details sur le projet :
                            </label>
                            <textarea
                                value={content} onChange={(e) => { setcontent(e.target.value) }}
                                type={"text"} placeholder="ecrire ici ..." class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                        </div>

                        <div>
                            <button type="submit" class="hover:shadow-form w-full rounded-md bg-gray-500 hover:bg-gray-600 active:bg-gray-700 py-3 px-8 text-center text-base font-semibold text-white outline-none" >
                                Modifier projet
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* End form Add Services */}

        </div>
    )
}

export default ProjectEditPage;