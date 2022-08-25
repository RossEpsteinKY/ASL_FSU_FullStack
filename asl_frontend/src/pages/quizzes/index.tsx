/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import axios from 'axios'
import moment from "moment";



// @ts-ignore


export default function QuizzesComponent() {

    const [quizzes, setQuizzes] = useState([{
        id: '',
        name: '',
        createdAt: '',
        updatedAt: '',
        weight: ''
    }]);



    async function getQuizzes() {
        let fire = await axios
            .get("http://localhost:5000/quizzes")
            .then((res) => {
                console.log('blah',res.data);
                setQuizzes(res.data);
                return;
            })
    }

    useEffect(() => {
        getQuizzes();

    },[])

    return (
        <>
           <h1>Works!</h1>

                {/*{quizzes.map((quiz) => (*/}
                {/*    <h1>*/}
                {/*        {quiz.name}*/}
                {/*        {fires}*/}
                {/*    </h1>*/}
                {/*))}*/}
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-kringle-sidebarbg">
                <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-kt-silver_sand-100 uppercase tracking-wider"
                    >
                        Quiz Id
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-kt-silver_sand-100 uppercase tracking-wider"
                    >
                        Quiz Name
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-kt-silver_sand-100 uppercase tracking-wider"
                    >
                        Created At
                    </th>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-kt-silver_sand-100 uppercase tracking-wider"
                    >
                        Updated At
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Delete</span>
                    </th>

                </tr>
                </thead>
                <tbody>
                {
                    quizzes?.length <= 0 ?
                        (
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                    colSpan={4}>
                                    No quizzes.
                                </td>
                            </tr>
                        ) :
                        quizzes?.map((quiz:any) => (
                            <tr key={quiz.id}
                                className={quiz.id % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>

                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {quiz.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">

                                    {quiz.name}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {moment(quiz.createdAt).format("ddd DD-MMM-YYYY, hh:mm A")}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {moment(quiz.updatedAt).format("ddd DD-MMM-YYYY, hh:mm A")}
                                </td>
                                {/*<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{event.event.event_name}</td>*/}
                                {/*<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">*/}
                                {/*    {event?.event.clientObj?.id !== undefined &&*/}
                                {/*        `${event.event.clientObj.first_name} ${event.event.clientObj.last_name}`*/}
                                {/*    }*/}
                                {/*    {event?.event.clientObj?.id === undefined &&*/}
                                {/*        event.client*/}
                                {/*    }*/}
                                {/*</td>*/}
                                {/*<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">*/}
                                {/*    <Link key={'sdf'} href={"/event/" + event.event.id + "/details"}>*/}
                                {/*        /!*<a  className="text-kt-red-500 hover:text-kt-red-900">*!/*/}
                                {/*        /!*    Edit*!/*/}
                                {/*        /!*</a>*!/*/}
                                {/*        <button*/}
                                {/*            type="button"*/}
                                {/*            className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kringle-button-primary text-kringle-button-primary hover:text-kringlee-button-primaryhover"*/}
                                {/*        >*/}
                                {/*            <PencilAltIcon className="h-5 w-5"*/}
                                {/*                           aria-hidden="true"/> &nbsp; Edit*/}
                                {/*        </button>*/}
                                {/*    </Link>*/}
                                {/*</td>*/}
                                {/*<td className="px-6 py-4 whitespace-nowrap text-sm text-kt-outer_space-300 hover:text-kt-outer_space-900">*/}
                                {/*    <button*/}
                                {/*        type="button"*/}
                                {/*        //className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-black bg-kringle-ltmink hover:bg-kringle-mink hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kringle-red"*/}
                                {/*        onClick={() => setItemToDelete(event.event.id)}*/}
                                {/*    >*/}
                                {/*        <TrashIcon className="h-5 w-5" aria-hidden="true"/>*/}

                                {/*    </button>*/}
                                {/*</td>*/}
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    )
}
