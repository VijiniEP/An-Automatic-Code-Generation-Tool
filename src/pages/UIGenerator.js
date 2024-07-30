import React, { useState } from 'react'
import CodeEditor from '../components/CodeEditor'
import DetailsForm from '../components/DetailsForm'

const UIGenerator = () => {
  const [code, setCode] = useState('output code will be displayed here...');

  return (
    <div className='flex flex-col ms-12 justify-center'>
      <DetailsForm type='ui' setCode={setCode} code={code}/>
      <CodeEditor type='ui' code={code}/>
    </div>
  )
}

export default UIGenerator