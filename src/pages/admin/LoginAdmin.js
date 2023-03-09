import React from 'react'

const LoginAdmin = () => {

    //const bg  = "https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80"
    const bg = "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    const  logo = "https://avatars.githubusercontent.com/u/107148545?v=4";

    return (
        <div class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{ backgroundImage: `url('${bg}')` }}>
            <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div class="text-white">
                    <div class="mb-8 flex flex-col items-center">
                        <img src={`${logo}`} width="150" alt="" srcset="" />
                        <h1 class="mb-2 text-2xl">admin site web </h1>
                        <span class="text-gray-300">Entrer information de connexion</span>
                    </div>
                    <form action="#">
                        <div class="mb-4 text-lg">
                            <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="nom d'utilisateur..." />
                        </div>

                        <div class="mb-4 text-lg">
                            <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="mot de passe ***" />
                        </div>
                        <div class="mt-8 flex justify-center text-lg text-black">
                            <button type="submit" class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">se connecter</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginAdmin