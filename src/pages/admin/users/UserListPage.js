import React, { useEffect, useState } from 'react'
import { LoadAllUsers } from '../../../actions/api/user_action';
import LoaderItems from '../../../components/LoaderItems';
import { SetInformationUser } from '../../../configurations/functionList';
import { routing } from '../../../configurations/routing';

const UserListPage = () => {
    const [userlist, setuserlist] = useState([1]);
    useEffect(() => {
        LoadAllUsers(setuserlist);
    }, []);


    return (
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">


            <div class=" dark:border-gray-700 py-5 rounded-3xl bg-gray-50 dark:text-gray-400 dark:bg-gray-500">
                <div class="flex flex-row justify-between px-5">
                    <h2 class="text-3xl">Listes des utlisateurs</h2>
                    <a href={`/${routing.admin}/${routing.useradd}`} type="button" class="px-3 py-2 rounded-lg bg-gray-300 text-gray-800">
                        + nouvelle utlisateur
                    </a>
                </div>
            </div>


            <div class="mt-4 mx-4">
                <div class="w-full overflow-hidden rounded-lg shadow-xs">
                    <div class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                        <span class="flex items-center col-span-3"> Showing 21-30 of 100 </span>
                        <span class="col-span-2"></span>
                        <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                            <nav aria-label="Table navigation">
                                <ul class="inline-flex items-center">
                                    <li>
                                        <input type="text" class="px-3 py-3 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" placeholder="recherche..." aria-label="Previous" />
                                    </li>

                                </ul>
                            </nav>
                        </span>
                    </div>
                    <div class="w-full overflow-x-auto">
                        <table class="w-full">
                            <thead>
                                <tr class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th class="px-4 py-3">Client</th>
                                    <th class="px-4 py-3">Amount</th>
                                    <th class="px-4 py-3">Status</th>
                                    <th class="px-4 py-3">Date</th>
                                </tr>
                            </thead>
                            {
                                userlist && userlist.length > 0 ? (

                                    <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                        {
                                            userlist.map((item) => {
                                                return (
                                                    <tr class="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                                        <td class="px-4 py-3">
                                                            <div class="flex items-center text-sm">
                                                                <div class="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                    <img class="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                                                                    <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                                </div>
                                                                <div>
                                                                    <p class="font-semibold">{`${item.firstname} ${item.lastname}`}</p>
                                                                    <p class="text-xs text-gray-600 dark:text-gray-400">{item.username}</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="px-4 py-3 text-sm">$855.85</td>
                                                        <td class="px-4 py-3 text-xs">
                                                            {item.status == true ?
                                                                (
                                                                    <span class="px-2 py-1 font-semibold leading-tight text-green-700  rounded-full"> connecté </span>
                                                                ) :
                                                                (
                                                                    <span class="px-2 py-1 font-semibold leading-tight text-red-700  rounded-full"> déconnecté </span>
                                                                )
                                                            }
                                                        </td>
                                                        <td class="px-4 py-3 text-sm space-x-1">
                                                            <a href={`/${routing.admin}/${routing.userlist}/${routing.useredit}/:id`} class="text-green-200  px-3 rounded-lg underline"
                                                                onClick={()=>{SetInformationUser(String(item._id))}}>
                                                                edit
                                                            </a>
                                                            <a href={`/${routing.admin}/${routing.userlist}/${routing.userpaswword}/:id`} class=" text-gray-400 py-2 px-3 underline"
                                                                onClick={()=>{SetInformationUser(String(item._id))}}>
                                                                password
                                                            </a>
                                                            <a href={`/${routing.admin}/${routing.userlist}/${routing.userdelete}/:id`} class="text-red-300 py-2 px-3 rounded-lg underline"
                                                                onClick={()=>{SetInformationUser(String(item._id))}}>
                                                                delete
                                                            </a>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                ) :
                                    <LoaderItems />
                            }
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserListPage;