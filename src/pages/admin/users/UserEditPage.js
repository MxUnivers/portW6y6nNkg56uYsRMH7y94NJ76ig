import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoadAllUserById, UpdateUser } from '../../../actions/api/user_action';
import Retour from '../../../configurations/functionList';
import { localvalue } from '../../../configurations/localvalue';

const UserEditPage = () => {
    const redirect  = useNavigate();

    var id = localStorage.getItem(localvalue.idUser);
    const [username, setusername] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [telephone, settelephone] = useState("");
    useEffect(() => {
        LoadAllUserById(id, setusername, setfirstname, setlastname, setemail, settelephone)
    }, []);

    return (
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">

            <div class=" relative grid min-h-screen place-items-center">
                <div class=" bg-gray-600 w-3/3 p-12  sm:w-3/3 md:w-3/3 lg:w-2/3">
                    <button class="absolute top-2 left-2 z-3 bg-gray-500 py-1 px-3 rounded-md"
                        onClick={Retour}
                    >retour</button>
                    <h1 class=" text-2xl font-semibold">Modifier information utlisateur</h1>
                    <p>saisir touts les information avec * </p>
                    <form class="mt-6"
                    onSubmit={(e)=>{
                        e.preventDefault();
                        UpdateUser(id,username,firstname,lastname,email,telephone, redirect);
                    }}>
                        <div class="flex justify-between gap-3">
                            <span class="w-1/2">
                                <label class="block text-xs font-semibold text-gray-200 uppercase">Nom  d{"'"} utilisateur</label>
                                <input value={username} onChange={(e) => { setusername(e.target.value) }} type="text" name="firstname" placeholder="John" autocomplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            </span>
                            <span class="w-1/2">
                                <label class="block text-xs font-semibold text-gray-200 uppercase">Nom</label>
                                <input value={firstname} onChange={(e) => { setfirstname(e.target.value) }} type="text" name="firstname" placeholder="nom" autocomplete="family-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            </span>
                        </div>
                        <label class="block mt-2 text-xs font-semibold text-gray-200 uppercase">Prénom</label>
                        <input value={lastname} onChange={(e) => { setlastname(e.target.value) }} type="text" name="lastname" placeholder="prénoms" autocomplete="lastname" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                        <label class="block mt-2 text-xs font-semibold text-gray-200 uppercase">Email</label>
                        <input value={email} onChange={(e) => { setemail(e.target.value) }} type="email" name="email" placeholder="email@gmail.com" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                        <label class="block mt-2 text-xs font-semibold text-gray-200 uppercase">téléphone</label>
                        <input value={telephone} onChange={(e) => { settelephone(e.target.value) }} type="number" name="telephone" placeholder="225020200022" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                        <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            modifier cet utlisateur
                        </button>
                        <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserEditPage;