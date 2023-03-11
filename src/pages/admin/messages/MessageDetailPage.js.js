import React, { useEffect, useState } from 'react'
import { AiOutlineFolderView } from 'react-icons/ai';
import { MdAlternateEmail, MdDeleteForever } from 'react-icons/md';
import { LoadAllMessageById } from '../../../actions/api/message_action';
import { bgImg, localvalue } from '../../../configurations/localvalue';
import {FiPhone} from  "react-icons/fi";
import  {FaUserCircle} from "react-icons/fa";
import Retour from '../../../configurations/functionList';



const MessageDetailPage = () => {

  var id = localStorage.getItem(localvalue.idMessage);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [telephone, settelephone] = useState("");
  const [subject, setsubject] = useState("");
  const [content, setcontent] = useState("");

  useEffect(() => {
    LoadAllMessageById(id, setname, setemail, settelephone, setsubject, setcontent);
  }, [])

  return (
    <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
      <div class="relative flex flex-col  group bg-gray-900 py-5 sm:py-5 px-4  space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
        <div class="flex flex-wrap space-x-3 bg-gray-500 px-4 py-3 rounded-lg">
          <img class="w-20 h-20 object-cover object-center rounded-full" src={`${bgImg.message}`} alt={`${bgImg.message}`} />
          <div class="space-y-3">
            <h2 class=" font-bold uppercase flex justify-start  items-center"><span class="px-3"><FaUserCircle class="h-6 w-6"/></span>{name}</h2>
            <p class="flex justify-start  items-center"><span class="px-3"><MdAlternateEmail  class="h-6 w-6"/></span>{email}</p>
            <p class="flex justify-start  items-center"><span class="px-3"><FiPhone  class="h-6 w-6"/></span>{telephone}</p>
          </div>
        </div>
        <div class="">
          <h4 class="text-white text-2xl font-bold capitalize text-center">sujet : {subject}</h4>
          <div class="py-5">
            <p class=" bg-gray-900 w-full line-clamp-3">
              {`
                La définition de la méthode Desc est simple : Décrire – Exprimer – Spécifier – Conclure. Cet outil très simple d'utilisation permet de mieux communiquer avec les autres. Il est souvent utilisé par les managers d'équipe pour exposer une erreur réalisée par un
              `}
            </p>
          </div>
          <p class=" flex space-x-2 text-white/50 py-1 px-3 rounded-lg">
            <a href={`#`} class="bg-lime-500 hover:bg-lime-600 active:bg-lime-700 py-1 px-2 rounded-lg text-white"><AiOutlineFolderView class="h-7 w-7" /></a>
            <a href={`#`} class="bg-red-500 hover:bg-red-600 active:bg-red-700 py-1 px-2 rounded-lg text-white"><MdDeleteForever class="h-7 w-7" /></a>
          </p>
        </div>
        <p class="absolute top-2 right-3 text-gray-200 inline-flex items-center text-xs"> message<span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
        <p class="absolute top-2 left-3 text-gray-200   bg-gray-500  py-1 px-2 rounded-lg inline-flex items-center text-xs"
        onClick={Retour}
        > retour<span class="ml-2 w-2 h-2 block rounded-full group-hover:animate-pulse"></span></p>
      </div>
    </div>
  )
}

export default MessageDetailPage;