import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const EvaluateCode = (props) => {
    const location = useLocation();
    const [message, setMessage] = useState({
        error: null,
        success: null,
    });
    const [file, setFile] = useState(null);
    const [evaluate, setEvaluate] = useState(null);

    const handleEvaluateFile = (e) => {
        setEvaluate(null);
        setMessage({
            ...message,
            error: null,
            success: null,
        });
        setFile(e.target.files[0]);
    }

    const handleEvaluateCode = async() => {
        if(file) {
            let data = new FormData();
            data.append('file', file);
            if(location.pathname === '/web') {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/evaluate-react-code`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                        },
                        body: data,
                    });
                    const responseJSON = await response.json(); 
                    setEvaluate(responseJSON.code_adherence_percentage);
                } catch (error) {
                    console.error(error);
                }
            } else if(location.pathname === '/mobile') {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/evaluate-react-code`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                        },
                        body: data,
                    });
                    const responseJSON = await response.json(); 
                    setEvaluate(responseJSON.code_adherence_percentage);
                } catch (error) {
                    console.error(error);
                }
            }
        }
      }

    return (
        <div className='form-container-outlet'>
            {evaluate ? (
                <div className='text-green-400 text-center m-2'>
                    Code Adherence Percentage = <span className='text-yellow-500 font-bold'>{evaluate}</span>
                </div>
            ) : (
                ''
            )}
            <div className='flex'>
                <div className='w-full'>
                    <label className='text-white'>Browse your {props.framework ? props.framework : ''} file here :</label>
                    <input 
                        type='file' 
                        name='file'
                        id='file' 
                        accept={
                            location.pathname === '/web' ? '.js, .ts'  :
                            location.pathname === '/mobile' ? '.java, .dt' :
                            ''
                        }
                        className='req-input' 
                        onChange={handleEvaluateFile}
                        // onChange={}
                    />
                </div>
                <button 
                    className='evaluate-button text-white mt- '
                    onClick={handleEvaluateCode}
                >
                    Evaluate 
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
    )
}

export default EvaluateCode