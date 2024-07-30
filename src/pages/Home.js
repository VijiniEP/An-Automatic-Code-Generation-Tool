import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import WebCode from './WebCode'

const Home = () => {
    const [framework, setFramework] = useState(null);

    console.log(framework);
    return (
        <div className='flex flex-row h-full'>
            <div className='hidden md:block sidebar-margin'>
                <Sidebar />
            </div>
            <div className='flex flex-col w-full'>
                <div>
                    <Navbar />
                </div>
                <div >
                    {/* <WebCode /> */}
                    <Outlet context={{framework, setFramework}}/>
                </div>
            </div>
        </div>
    )
}

export default Home