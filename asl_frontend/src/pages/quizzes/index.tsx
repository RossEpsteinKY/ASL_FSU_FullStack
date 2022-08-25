/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import axios from 'axios'



// @ts-ignore


export default function QuizzesComponent() {

    const [quizzes, setQuizzes] = useState([{
        id: '',
        name: '',
        createdAt: '',
        updatedAt: '',
        weight: ''
    }]);

    const [fires, setFires] = useState("")

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

                {quizzes.map((quiz) => (
                    <h1>
                        {quiz.name}
                        {fires}
                    </h1>
                ))}
            
        </>
    )
}
