import React, { useState } from 'react'
import { UpdateUserPassword } from '../../../actions/api/user_action';
import { localvalue } from '../../../configurations/localvalue'

const UserPasswordPage = () => {
    var id  =  localStorage.getItem(localvalue.idUser);
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    return (
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">

            <div class=" relative grid min-h-screen place-items-center">
                <div class=" bg-gray-600 w-3/3 p-12  sm:w-3/3 md:w-3/3 lg:w-2/3">
                <button class="absolute top-2 left-2 z-3 bg-gray-500 py-1 px-3 rounded-md"
                 onClick={()=>{
                    window.history.back();
                 }} 
                >retour</button>
                    <h1 class=" text-2xl font-semibold">Modifier mot de passe</h1>
                    <p>saisir touts les information avec * </p>
                    <form class="mt-6"
                    onSubmit={(e)=>{
                        e.preventDefault();
                        UpdateUserPassword(id, password)
                    }}
                    >
                        
                        <label value={password} onChange={(e)=>{setpassword(e.target.value)}} class="block mt-2 text-xs font-semibold text-gray-200 uppercase">Mot de passe</label>
                        <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" name="password" placeholder="*******" autocomplete="password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        
                        <label value={password} onChange={(e)=>{setconfirmPassword(e.target.value)}} class="block mt-2 text-xs font-semibold text-gray-200 uppercase">Confirmer mot de passe</label>
                        <input value={password} onChange={(e)=>{setconfirmPassword(e.target.value)}} type="password" name="password" placeholder="********" autocomplete="confirm-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        
                        
                        <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            modifier mot de passe
                        </button>
                        <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserPasswordPage;