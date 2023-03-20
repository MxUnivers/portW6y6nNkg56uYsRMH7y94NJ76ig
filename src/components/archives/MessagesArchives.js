import React, { useEffect, useState } from 'react'
import { MdOutlineLockClock } from 'react-icons/md';
import { DeleteMessage, LoadAllMessagesArchives, RecycleMessage } from '../../actions/api/message_action';

const MessagesArchives = () => {
    const [messagelist, setmessagelist] = useState([]);
    useEffect(() => {
        LoadAllMessagesArchives(setmessagelist);
    }, [])

    return (
        <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <div class="py-3">
                <div class="px-3">
                    <h2>Message archivés</h2>
                </div>
            </div>
            <table class="w-full border-collapse bg-red-300 text-left text-sm text-gray-500">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Name et email</th>
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900">type</th>
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900">Role</th>
                        <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
                    </tr>
                </thead>
                {
                    messagelist && messagelist.length > 0 ?
                        (
                            <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                                {
                                    messagelist.map((item) => {
                                        return (
                                            <tr class="hover:bg-red-350">
                                                <th class="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                                    <div class="relative h-10 w-10">
                                                        <img
                                                            class="h-full w-full rounded-full object-cover object-center"
                                                            src="data:image/png;base64,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"
                                                            alt=""
                                                        />
                                                        <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                                                    </div>
                                                    <div class="text-sm">
                                                        <div class="font-medium text-gray-700">{item.name}</div>
                                                        <div class="text-gray-400">{item.email}</div>
                                                    </div>
                                                </th>
                                                <td class="px-6 py-4">
                                                    <span
                                                        class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                                    >
                                                        <span class="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                                        message
                                                    </span>
                                                </td>
                                                <td class="px-6 py-4">{item.subject}</td>

                                                <td class="px-6 py-4">
                                                    <form class="flex justify-center items-center gap-4 bg-lime-500 hover:bg-lime-600 text-white py-1 "
                                                        onSubmit={(e) => {
                                                            e.preventDefault();
                                                            RecycleMessage(item._id)
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
                            <div>Aucun message en vus</div>
                        )
                }
            </table>
        </div>
    )
}

export default MessagesArchives;