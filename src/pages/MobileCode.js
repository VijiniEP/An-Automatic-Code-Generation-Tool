import React, { useState } from 'react';
import CodeEditor from '../components/CodeEditor';
import DetailsForm from '../components/DetailsForm';
import { useOutletContext } from 'react-router-dom';

const MobileCode = () => {
  const { framework, setFramework} = useOutletContext();
  const [code, setCode] = useState('output code will be displayed here...');

  return (
    <div className='flex flex-col ms-12 justify-center'>
        <DetailsForm type='mobile' setFramework={setFramework} setCode={setCode} framework={framework}/>
        <CodeEditor  type='mobile' framework={framework}  code={code}/>
    </div>
  )
}

export default MobileCode