import React, { useState } from 'react'
import {AiOutlineHome , AiFillLayout} from "react-icons/ai";
import {RiCustomerService2Line} from  "react-icons/ri";
import {GrProjects} from  "react-icons/gr";
import {FcContacts} from  "react-icons/fc";
import { active_parameter } from '../../../configurations/ListApi';
import FormHome from '../../../components/admin/settings/FormHome';
import FormAbout from '../../../components/admin/settings/FormAbout';
import FormService from '../../../components/admin/settings/FormService';
import FormProject from '../../../components/admin/settings/FormProject';
import FormContact from '../../../components/admin/settings/FormContact';

const SettingPage = () => {

    const [btnhome, setbtnhome] = useState(active_parameter[0].name);
    const [btnabout, setbtnabout] = useState(active_parameter[1].name);
    const [btnservice, setbtnservice] = useState(active_parameter[1].name);
    const [btnproject, setbtnproject] = useState(active_parameter[1].name);
    const [btncontact, setbtncontact] = useState(active_parameter[1].name);

    // Home button
    
    const ShowTabContent =  (index)=>{
        if(index==0){
            setbtnhome(active_parameter[0].name);
            setbtnabout(active_parameter[1].name);
            setbtnservice(active_parameter[1].name);
            setbtnproject(active_parameter[1].name);
            setbtncontact(active_parameter[1].name);
        }else if (index==1){
            setbtnhome(active_parameter[1].name);
            setbtnabout(active_parameter[0].name);
            setbtnservice(active_parameter[1].name);
            setbtnproject(active_parameter[1].name);
            setbtncontact(active_parameter[1].name);
            setbtnhome(active_parameter[1].name);
            setbtnabout(active_parameter[1].name);
            setbtnservice(active_parameter[0].name);
            setbtnproject(active_parameter[1].name);
            setbtncontact(active_parameter[1].name);
        }else if (index==3){
            setbtnhome(active_parameter[1].name);
            setbtnabout(active_parameter[1].name);
            setbtnservice(active_parameter[1].name);
            setbtnproject(active_parameter[0].name);
            setbtncontact(active_parameter[1].name);
        }else if (index==4){
            setbtnhome(active_parameter[1].name);
            setbtnabout(active_parameter[1].name);
            setbtnservice(active_parameter[1].name);
            setbtnproject(active_parameter[1].name);
            setbtncontact(active_parameter[0].name);
        }

    }


    



    return (
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">

            <div class="flex-1 px-2 sm:px-3 p-4">

                <div class="flex justify-between items-center">
                    <h3 class="text-3xl font-extralight text-white/50">Paramètre des pages </h3>
                    <div class="inline-flex items-center space-x-2">
                        <div><input type="text" class="py-2 px-3 text-gray-600 rounded-lg" placeholder="recherche ..." /></div>
                        <a class="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                        </a>
                    </div>
                </div>

                { /* Content page de parametre des pages */}

                <div class="mb-10 sm:mb-0 mt-10 ">

                    <ul class="nav nav-tabs flex flex-wrap space-x-3" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button onClick={()=>{ShowTabContent(0)}} title="page d'accueil" class="nav-link flex flex-row justify-center active  px-2 py-1 rounded-lg bg-gray-100 text-gray-700" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                               <AiOutlineHome class="h-7 w-7 "/> 
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button onClick={()=>{ShowTabContent(1)}} title='page a propos de nous ' class="nav-link flex flex-row justify-center active  px-2 py-1 rounded-lg bg-gray-100 text-gray-700" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                               <AiFillLayout class="h-7 w-7 "/> 
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button onClick={()=>{ShowTabContent(2)}} title='pages des services' class="nav-link flex flex-row justify-center active  px-2 py-1 rounded-lg bg-gray-100 text-gray-700" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                               <RiCustomerService2Line class="h-7 w-7 "/> 
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button onClick={()=>{ShowTabContent(3)}} title='page des projet' class="nav-link flex flex-row justify-center active  px-2 py-1 rounded-lg bg-gray-100 text-gray-700" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                               <GrProjects class="h-7 w-7 "/> 
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button onClick={()=>{ShowTabContent(4)}} title='information contact' class="nav-link flex flex-row justify-center active  px-2 py-1 rounded-lg bg-gray-100 text-gray-700" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                               <FcContacts class="h-7 w-7 "/> 
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class={`tab-pane fade show active ${btnhome}`} id="home" role="tabpanel" aria-labelledby="home-tab">
                        <FormHome/>
                        </div>
                        <div class={`tab-pane fade ${btnabout}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <FormAbout/>
                        </div>
                        <div class={`tab-pane fade ${btnservice}`} id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <FormService/>
                        </div>
                        <div class={`tab-pane fade ${btnproject}`} id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <FormProject/>
                        </div>
                        <div class={`tab-pane fade ${btncontact}`} id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <FormContact/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SettingPage