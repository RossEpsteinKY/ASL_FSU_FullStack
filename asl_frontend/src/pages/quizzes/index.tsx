/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import axios from 'axios'
import moment from 'moment';




// @ts-ignore


export default function QuizzesComponent() {

    const [quizzes, setQuizzes] = useState([{
        id: '',
        name: '',
        createdAt: '',
        updatedAt: '',
        weight: ''
    }]);

    const [quizSelected, setQuizSelected] = useState(false);

    const [activeQuiz, setActiveQuiz] = useState({
            name:''
    });

    function quizInitialize(quiz: any) {
        setActiveQuiz(quiz);
        setQuizSelected(true);


    }



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

            {!quizSelected && (
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
                                    <b className="text-3xl"><i>No quizzes.</i></b>
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

                                    <a onClick={() => quizInitialize(quiz)}>{quiz.name}</a>
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {moment(quiz.createdAt).format("ddd DD-MMM-YYYY, hh:mm A")}
                                </td>

                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {moment(quiz.updatedAt).format("ddd DD-MMM-YYYY, hh:mm A")}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>)
            }

            {quizSelected && (

                    <h1>{activeQuiz.name}</h1>

                )
            }
        </>
    )
}
