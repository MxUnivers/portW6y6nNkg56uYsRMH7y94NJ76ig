import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { LoadAllProjectById } from '../../actions/api/project_action';
import { localvalue } from '../../configurations/localvalue';

const ProjectDetail = () => {
    var id = localStorage.getItem(`${localvalue.idProject}`);

    const [name, setname] = useState("");
    const [description, setdescription] = useState("");
    const [content, setcontent] = useState("");
    const [coverPicture, setcoverPicture] = useState("");
    const [link, setlink] = useState("");

    useEffect(() => {
        LoadAllProjectById(id, setname, setcoverPicture, setdescription, setcontent, setlink);
    }, []);


    return (
        <section class="text-gray-700 body-font  bg-white">
            <div class="container px-5 py-24 mx-auto">



                <div className="container mx-auto py-12 bg-gray-100">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">{name}</h2>
                        <div className="flex flex-wrap mb-6">
                            <div className="w-full md:w-1/2">
                                <img className="w-full rounded-lg mb-6" src={coverPicture} alt="Capture d'écran du projet" />
                            </div>
                            <div className="w-full md:w-1/2 md:pl-6">
                                <p className="text-2xl mb-4">Description du projet</p>
                                <p className="mb-4 p-3 bg-gray-100 rounded-lg">{description}</p>
                                <p className="mb-4 p-3 rounded-lg">{content}</p>
                               <ul className="list-disc list-inside opacity-0">
                                    <li>Feature 1</li>
                                    <li>Feature 2</li>
                                    <li>Feature 3</li>
                                </ul> 
                                <div className="mt-6">
                                    <a class="" target='_blank' href={link}>
                                    <span className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
                                        Voir le projet
                                    </span>
                                    </a>
                                    <span className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                                        Code source
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr className="border-gray-300 mb-6" />

                        {
                            /*
                        <h3 className="text-2xl font-bold mb-4">Technologies utilisées</h3>
                        <ul className="flex flex-wrap">
                            <li className="bg-gray-200 text-gray-700 font-medium py-1 px-3 rounded-full text-sm mr-2 mb-2">React</li>
                            <li className="bg-gray-200 text-gray-700 font-medium py-1 px-3 rounded-full text-sm mr-2 mb-2">Tailwind CSS</li>
                            <li className="bg-gray-200 text-gray-700 font-medium py-1 px-3 rounded-full text-sm mr-2 mb-2">Animation</li>
                            <li className="bg-gray-200 text-gray-700 font-medium py-1 px-3 rounded-full text-sm mr-2 mb-2">Design</li>
                        </ul> */
                        }
                    </div>
                </div>



            </div>
        </section>
    )
}

export default ProjectDetail;