import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { FaDownload } from "react-icons/fa6";
import EvaluateCode from './EvaluateCode';

const CodeEditor = (props) => {
  const [evaluate, setEvaluate] = useState(null);

  // const onLoad = (editor) => {
  //   console.log("I've loaded");
  // }

  const onChange = (newValue) => {
    console.log('Change', newValue);
  }

  console.log(props.framework , props.type);


  const handleDownload = () => {
    const fileData = new Blob([props.code], {type: 'text/plain'});
    const url = URL.createObjectURL(fileData);
    const link = document.createElement('a');
    if(props.type === 'ui') {
      link.download = 'CodeCraft.xml';
    } else if(props.type === 'web') {
      if(props.framework === 'React') {
        link.download = 'CodeCraft.js';
      } else if (props.framework === 'Angular') {
        link.download = 'CodeCraft.ts';
      }
    } else if (props.type === 'mobile') {
      if(props.framework === 'Android') {
        link.download = 'CodeCraft.java';
      } else if (props.framework === 'Flutter') {
        link.download = 'CodeCraft.dt';
      }
    }
    link.href = url;
    link.target = "_blank";
    link.click();
  }
  
  useEffect(() => {
    // Additional setup or side effects can go here
  }, []);

  return (
    <div>
      <AceEditor
        mode="javascript"
        theme="monokai"
        // name="blah2"
        value={props.code}
        // onLoad={onLoad}
        onChange={onChange}
        fontSize={12.5}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
          useWorker: false,
        }}
        className='ace-editor'
        style={{
          backgroundColor: 'rgb(15 23 42)',
          width: '90%',
          maxWidth: '1000px'
        }}
      />
      {/* <a
        href={value}
        download='codeCraft.js'
        rel='noreferree'
      > */}
      {(props.code && props.code !== 'output code will be displayed here...') && (
        <div>
          <div className='button-div flex justify-end'>          
            <button 
              className='download-button flex text-white p-1 '
              onClick={handleDownload}
            >
              <FaDownload className='mt-1 mx-1'/>
              Download Code
            </button>
          </div>
          <EvaluateCode framework={props.framework}/>
        </div>
      )}
    </div>
  );
}

export default CodeEditor;
