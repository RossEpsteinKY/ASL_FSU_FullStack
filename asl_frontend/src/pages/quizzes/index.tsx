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
    const [selectedAnswer, setSelectedAnswer] = useState('');

    const [activeQuiz, setActiveQuiz] = useState({
            name:''
    });
  const [questions, setQuestions] = useState([{
        id: '',
        name: '',
        createdAt: '',
        updatedAt: '',
        weight: ''
    }]);

      const [choices, setChoices] = useState([{
            id: '',
            choice: '',
            createdAt: '',
            updatedAt: '',
        }]);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("Thank you for your answers");
    setQuizSelected(false);
  }

    function quizInitialize(quiz: any) {
        setActiveQuiz(quiz);
        getQuestions();
        setQuizSelected(true);


    }

    async function getQuestions() {
        let fire = await axios
            .get("http://localhost:5000/questions")
            .then((res) => {
                console.log('blah',res.data);
                setQuestions(res.data);
                return;
            })

        let choices =  await axios
                                  .get("http://localhost:5000/choices")
                                  .then((res) => {
                                      console.log('blah',res.data);
                                      setChoices(res.data);
                                      return;
                                  })

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

                    <div>
                    <h1>{activeQuiz.name}</h1>

        <form onSubmit={handleSubmit}>
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="bg-white py-6 px-4 space-y-6 sm:p-6">


              <fieldset className="mt-6">


    {questions?.map((question:any) => (


<legend className="text-base font-medium text-gray-900">{question.question}</legend>


                        ))}




                <div className="mt-4 space-y-4">

                                        {choices?.map((choice:any) => (




<div className="flex items-center">
                     <input
                       id="question"
                       name="question"
                       type="radio"
                       className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                       onChange={(e) => setSelectedAnswer(e.target.value)}
                     />
                <label htmlFor="push-everything" className="ml-3">
                       <span className="block text-sm font-medium text-gray-700">{choice.choice}</span>
                     </label>
                   </div>

))}



                </div>
              </fieldset>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                disabled={!selectedAnswer}
                className="bg-indigo-600 border disabled:opacity-50 border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        </form>

{/*                     <form> */}


{/*                     </form> */}
                    </div>


                )
            }
        </>
    )
}
