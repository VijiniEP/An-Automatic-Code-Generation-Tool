import React from 'react';
import { BsCode, BsCodeSlash } from "react-icons/bs";
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleRouteUI = () => {
        navigate('/home');
    };
    const handleRouteWeb = () => {
        navigate('/web');
    };
    const handleRouteMobile = () => {
        navigate('/mobile');
    };

    return (
        <div className='flex flex-col sidebar h-full'>
            <div className='pt-3 flex items-center mb-20 pb-10'>
                <BsCode className='text-2xl mx-2 mt-5 text-blue-500'/> {/* Adjust the text size as needed */}
                <h1 className='header-sidebar'>CODE CRAFT</h1>
                <BsCodeSlash className='text-2xl mx-2 mt-5 text-blue-500 '/> {/* Adjust the text size as needed */}
            </div>
            
            <div 
                onClick={handleRouteWeb}
                className={`${location.pathname === '/web' ? 'sidebar-text-option-active' : ''} sidebar-text-option pl-10 mr-5`}
            >
                <h1>Web Code Generator</h1>
            </div>



           
           
        </div>
    )
}

export default Sidebar