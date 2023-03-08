import React, { useState } from 'react'
import { CreateNewUser } from '../../../actions/api/user_action';

const UserAddPage = () => {

    const [username, setusername] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [telephone, settelephone] = useState("");
    const [password, setpassword] = useState("");
    const [confirPassword, setconfirPassword] = useState("");
    const [msgPassword, setmsgPassword] = useState("")

    
    return (
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64"
        >

            <div class=" relative grid min-h-screen place-items-center">
                <div class=" bg-gray-600 w-3/3 p-12  sm:w-3/3 md:w-3/3 lg:w-2/3">
                    <button class="absolute top-2 left-2 z-3 bg-gray-500 py-1 px-3 rounded-md"
                        onClick={() => {
                            window.history.back();
                        }}
                    >retour</button>
                    <h1 class=" text-2xl font-semibold">Ajouter un nouvelle utlisateur</h1>
                    <p>saisir touts les information avec * </p>
                    <form  
                    onSubmit={(e)=>{
                        e.preventDefault();
                        CreateNewUser(username,firstname, lastname,email,telephone,password);
            
                        // if(password ==  confirPassword){
                        // }else{
                        //     setmsgPassword("Confirmation mot de passe  incorrete !");
                        // }
                    }}
                     class="mt-6">
                        <div class="flex justify-between gap-3">
                            <span class="w-1/2">
                                <label class="block text-xs font-semibold text-gray-200 uppercase">Nom  d{"'"} utilisateur</label>
                                <input value={username} onChange={(e)=>{setusername(e.target.value)}} type="text" name="firstname" placeholder="John" autocomplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            </span>
                            <span class="w-1/2">
                                <label class="block text-xs font-semibold text-gray-200 uppercase">Nom</label>
                                <input  value={firstname} onChange={(e)=>{setfirstname(e.target.value)}} type="text" name="firstname" placeholder="nom" autocomplete="family-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                            </span>
                        </div>
                        <label class="block mt-2 text-xs font-semibold text-gray-200 uppercase">Prénom</label>
                        <input  value={lastname} onChange={(e)=>{setlastname(e.target.value)}} type="text" name="lastname" placeholder="prénoms" autocomplete="lastname" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                        <label class="block mt-2 text-xs font-semibold text-gray-200 uppercase">Email</label>
                        <input  value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" name="email" placeholder="email@gmail.com" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                        <label class="block mt-2 text-xs font-semibold text-gray-200 uppercase">téléphone</label>
                        <input  value={telephone} onChange={(e)=>{settelephone(e.target.value)}} type="number" name="telephone" placeholder="225020200022" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                        <label class="block mt-2 text-xs font-semibold text-gray-200 uppercase">mot de passe</label>
                        <input  value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" name="password" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                        <label class="block mt-2 text-xs font-semibold text-gray-200 uppercase">Confirmer mot de passe</label>
                        <input value={confirPassword} onChange={(e)=>{setconfirPassword(e.target.value)}} type="password" name="password-confirm" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />

                        <label class="block mt-2 text-xs font-semibold text-gray-200 uppercase">{}</label>

                        <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            + Créer utlisateur
                        </button>
                        <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserAddPage;