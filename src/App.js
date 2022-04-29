import { useState } from 'react';
import './App.css';

import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {
  const [Content, setContent] = useState('');
  const [Close, setClose] = useState('');

  const newContent = (contentEdit) => {
    setContent(contentEdit);
  }

  const closeWindow = (window) => {
    const windowClosed = document.getElementById(window);
    windowClosed.classList.toggle("close");
  }

  return (
    <div className="App">
      <Editor newContent={newContent} closeWindow={closeWindow}/>
      <Previewer contenido={Content} closeWindow={closeWindow}/>
    </div>
  );
}

export default App;
