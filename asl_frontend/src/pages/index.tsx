import React from 'react';
import App from '../App';
import Dashboard from "./dashboard";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
function HomePage() {
    // return <div>Welcome to Next.js!</div>
   return( <>
        <Dashboard />
    </>)
}

export default HomePage
