import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';


const EditorBoard = () => {
  const [code, setCode] = React.useState(
    `
    /**
    * About me
    * I have 5 years of еxperience in web
    * development lorem ipsum dolor sit amet, 
    * consectetur adipiscing elit, sed do eiusmod
    * tempor incididunt ut labore et dolore
    * magna aliqua. Ut enim ad minim veniam,
    * quis nostrud exercitation ullamco laboris
    * nisi ut aliquip ex ea commodo consequat.
    * Duis aute irure dolor in reprehenderit in
    *
    * Duis aute irure dolor in reprehenderit in
    * voluptate velit esse cillum dolore eu fugiat 
    * nulla pariatur. Excepteur sint occaecat 
    * officia deserunt mollit anim id est laborum.
    */`
  );
  return (
    <div data-color-mode="dark">
      <CodeEditor
        value={code}
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={16}
        style={{
          fontSize: 16,
          backgroundColor: "transparent",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </div>

  );
}

export default EditorBoard