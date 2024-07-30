import React, { useState } from 'react';
import { FaArrowDown } from "react-icons/fa6";

const XmlGen = (props) => {
    const [message, setMessage] = useState({
        error: null,
        success: null,
    });

    const handleEvaluateCode = async () => {
        props.setCode('output code will be displayed here...');
        if (props.uiInput) {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/function01/XML_return/`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            // 'Content-Type': 'multipart/form-data',
                        },
                        body: {input: JSON.stringify(props.uiInput)},
                    });
                    const responseJSON = await response.json();
                    console.log(responseJSON)
                    // props.setCode(responseJSON);
                } catch (error) {
                    console.error(error);
                }
        } else {
            setMessage({
                ...message,
                error: 'Please Select framework before submit!.',
                success: null,
            });
        }
    }

    return (
        <div className='md:mt-5'>
            <div className='form-container-outlet items-center'>
                <div  className='flex items-center'>
                    <label className='normal-text w-full'> Image data : {props.uiInput ? 'Data' : ''} 
                        
                    </label>
                    <button 
                    className='evaluate-button text-white mt- '
                    onClick={handleEvaluateCode}
                >
                    XML_Generate 
                </button>
                </div>
                <div>
                    {message.success &&  (
                        <p className="text-yellow-500 mt-2">{'**'} {message.success}</p>
                    )}
                    {message.error && (
                        <p className="text-red-500 mt-2">{'**'} {message.error}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default XmlGen