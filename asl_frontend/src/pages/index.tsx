import React from 'react';
import App from '../App';
import Dashboard from "./dashboard";
import {Fragment, useEffect, useState} from 'react'
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

function HomePage() {
    const [loggedIn, setLoggedIn ] = useState(false);
   return( <>


        {loggedIn == true &&  (
            <Dashboard />
         )
        }

        {loggedIn == false &&  (

          <h1>fgaiasodifh</h1>
        )
       }
    </>)
}

export default HomePage
