import React from 'react';
import {Fragment, useState, useEffect,} from 'react'
import logo from './logo.svg';
import './App.css';
import Dashboard from "./pages/dashboard";
import LoginGithub from 'react-login-github';
import axios from 'axios';
import { useQuery } from "react-query";



export default function App() {

    useEffect(() => {

    const windowUrl = window.location.search;

        let params = new URLSearchParams(windowUrl);
        console.log(params.getAll('code'))

        const code = params.getAll('code');
        if(code !== null && code[0]?.length >5){
            console.log('LOG THEM IN');
            logThemIn(code);
            return;
        }
    },[])

async function logThemIn(code: any){
        setAuth('yes');
//     console.log('iauhsdf')
//
//   const params = {
//       code: code,
//     };
//
//     console.log(params)
//
//    const loginRequest = await axios
//         .post(`http://localhost:5000/auth/callback?code=${code}`)
//         .then((res) => {
//         console.log('blah',res.data);
//
//     });
//     setAuth("true");
//     console.log('test',loginRequest);
 }


    const [auth, setAuth] = useState("none");
    const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="App">
        {auth === "none" && (
<main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Please sign in via GitHub</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                  To protect this application, the developer requires you to sign in.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-10"
                    >
                        <a href="https://github.com/login/oauth/authorize?client_id=e8bb249dc2d40509c3ab"
                              className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                            >
                              Sign In To GitHub
                        </a>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></main>
//       <LoginGithub clientId="e8bb249dc2d40509c3ab"
//
//        />
        )}
        {auth !== "none" && (
            <Dashboard />
        )}



    </div>
  );
}


