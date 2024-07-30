import React, { useState } from 'react';
import { FaArrowDown } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import EvaluateCode from './EvaluateCode';
import XmlGen from './XmlGen';

const DetailsForm = (props) => {
    const location = useLocation();
    const [xmlFile, setXmlFile] = useState(null);
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState({
        error: null,
        success: null,
    });
    const [uiInput,  setUiInput] = useState(null);

    // if(props.type === 'web'){
    //     props.setFramework('React');
    // } else if (props.type === 'mobile') {
    //     props.setFramework('Android');
    // }

    console.log(props.framework);

    const handleXMLchange = (e) => {
        setMessage({
            ...message,
            error: null,
            success: null,
        });
        setXmlFile(e.target.files[0]);
    }

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleFramework = (e) => {
        setMessage({
            ...message,
            error: null,
            success: null,
        });
        props.setFramework(e.target.value);
    }

    const handleImageSubmit = async() => {
        if (image) {
            let data = new FormData();
            data.append('image_file', image);
            try {
                const response = await fetch(`http://127.0.0.1:8000/function01/UIdetection_box_class/`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        // 'Content-Type': 'multipart/form-data',
                    },
                    body: data,
                });
                const responseJSON = await response.json(); 
                console.log(responseJSON);
                // props.setCode(responseJSON);
                setUiInput(responseJSON);
            } catch (error) {
                console.error(error);
            }
        } else {
            setMessage({
                ...message,
                error: 'Please upload image before submit!.',
                success: null,
            });
        }
    }

    const handleSubmit = async () => {
        props.setCode('output code will be displayed here...');
        console.log("helooooo")
        if (xmlFile) {
            let data = new FormData();
            data.append('xml_file', xmlFile);
    
            if (props.type === 'web') {
                if(props.framework) {
                    try {
                        const response = await fetch(`http://127.0.0.1:8000/web_generate_code?framework=${props.framework}`, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                // 'Content-Type': 'multipart/form-data',
                            },
                            body: data,
                        });
                        const responseJSON = await response.json(); // Change 'toJSON()' to 'json()'
                        props.setCode(responseJSON);
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
            } else if (props.type === 'mobile') {
                if(props.framework) {
                    try {
                        const response = await fetch(`http://127.0.0.1:8000/mobile_generate_code?framework=${props.framework}`, {
                            method: 'POST',
                            headers: {
                                'Accept': 'application/json',
                                // 'Content-Type': 'multipart/form-data',
                            },
                            body: data,
                        });
                        const responseJSON = await response.json(); // Change 'toJSON()' to 'json()'
                        props.setCode(responseJSON);
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
        } else {
            setMessage({
                ...message,
                error: 'Please upload XML file before submit!.',
                success: null,
            });
        }
    }

    return (
        <div className='md:mt-5'>
            <div className='heading-small md:hidden'>
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
            {props.type === 'ui' ? (
                <div>
                <div className='form-container-outlet items-center'>
                    <div  className='flex items-center'>
                        <label className='normal-text w-full'> Select Image : {}
                            <input
                                type='file'
                                accept='image/*'
                                className='text-blue-300 '
                                onChange={handleImage}
                            />
                        </label>
                        <FaArrowDown 
                            onClick={handleImageSubmit}
                            className='send-arrow ml-2' 
                        />
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
                    {uiInput && (
                        <XmlGen uiInput={uiInput} setCode={props.setCode}/>
                    )}
                </div>
            ) : ( 
                <div className='form-container-outlet '>
                    <div className='flex'>
                        <label className='normal-text mr-2'> Framework
                            <select 
                                className='selection-input'
                                onChange={handleFramework}
                            >
                                {props.type === 'web' ? (
                                    <>
                                        <option value='' ></option>
                                        <option value='React' selected={props.framework === 'React'} >React</option>
                                        <option value='Angular'>Angular</option>
                                    </>
                                ) :  (
                                    <>
                                        <option value=''></option>
                                        <option value='Android'>Android</option>
                                        <option value='Flutter'>Flutter</option>
                                    </>
                                )}
                            </select>
                        </label>
                        {/* <textarea
                            type='email'
                            className='req-input'
                            placeholder='Place your XML code here...'
                        /> */}
                        <input 
                            type='file' 
                            name='xml_file'
                            id='xml_file' accept='text/xml' 
                            className='req-input mt-6' 
                            onChange={handleXMLchange}
                        />

                        <FaArrowDown
                            onClick={handleSubmit}
                            className='send-arrow ml-2 mt-6' 
                        />
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
            )}
        </div>
    )
}

export default DetailsForm