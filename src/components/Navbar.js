import React from 'react';
import { AiOutlineLogout } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
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
        <div className='navbar flex flex-row ms-5 '>
            <div className='hidden md:block w-full heading'>
                {location.pathname === '/home' ? (
                    <div>UI Generator</div>
                ) : (
                    location.pathname === '/web' ? (
                        <div>Web Code Generator</div>
                    ) : (
                        <div>Mobile Code Generator</div>
                    )
                )}
            </div>
            <div 
                onClick={handleRouteUI}
                className={`${location.pathname === '/home' ? 'navbar-active' : ''} md:hidden navbar-option`}
            >
                <h1>UI</h1>
            </div>
            <div 
                onClick={handleRouteWeb}
                className={`${location.pathname === '/web' ? 'navbar-active' : ''} md:hidden navbar-option `}
            >
                <h1>Web Code</h1>
            </div>
            <div 
                onClick={handleRouteMobile}
                className={`${location.pathname === '/mobile' ? 'navbar-active' : ''} md:hidden navbar-option`}
            >
                <h1>Mobile Code</h1>
            </div>
            <div 
                className= 'logout mr-5 md:w-full ps-10 ms-auto md:mt-2.5'
            >   
                <AiOutlineLogout className='sm:hidden mt-1 text-xl' title='Logout'/>
                <h1 className='hidden sm:block logout-text'>Logout</h1>
            </div>
        </div>
    )
}

export default Navbar