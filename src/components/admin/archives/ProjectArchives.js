
import React, { useEffect, useState } from 'react'
import { MdOutlineLockClock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { LoadAllProjectsArchives, RecycleProject } from '../../../actions/api/project_action';
import { LoadAllServicesArchives, RecycleService } from '../../../actions/api/service_action';

const ProjectArchives = () => {
    const navigate = useNavigate();
    const [projectlist, setprojectlist] = useState([]);
    useEffect(() => {
        LoadAllProjectsArchives(setprojectlist);
    }, [])

    return (
        <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <div class="py-3">
                <div class="px-3">
                    <h2>Projets archivés</h2>
                </div>
            </div>
            <table class="w-full border-collapse bg-red-300 text-left text-sm text-gray-500">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Nom du projet</th>
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900">type</th>
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Role</th>
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
                    </tr>
                </thead>
                {
                    projectlist && projectlist.length > 0 ?
                        (
                            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                                {
                                    projectlist.map((item) => {
                                        return (
                                            <tr class="hover:bg-red-350">
                                                <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                                    <div class="relative h-10 w-10">
                                                        <img
                                                            class="h-full w-full rounded-full object-cover object-center"
                                                            src={`${item.coverPicture}`}
                                                            alt=""
                                                        />
                                                        <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                                    </div>
                                                    <div class="text-sm">
                                                        <div class="font-medium text-gray-700">{item.name}</div>
                                                        <div class="text-gray-400">{item.description}</div>
                                                    </div>
                                                </th>
                                                <td class="px-6 py-4">
                                                    <span
                                                        class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                                    >
                                                        <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                                        projet
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4">{item.subject}</td>

                                                <td class="px-6 py-4">
                                                    <form class="flex justify-center items-center gap-4 bg-lime-500 hover:bg-lime-600 text-white py-1 "
                                                        onSubmit={(e) => {
                                                            e.preventDefault();
                                                            RecycleProject(item._id, navigate);
                                                        }}
                                                    >
                                                        <button type="submit" x-data="{ tooltip: 'Delete' }" href="#">
                                                            <MdOutlineLockClock class="h-5 w-5" />
                                                        </button>
                                                    </form>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>

                        ) :
                        (
                            <div>Aucun service en vus</div>
                        )
                }
            </table>
        </div>
    )
}

export default ProjectArchives;