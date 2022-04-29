import React, { useState } from 'react';
import '../CSS/windowsScript.css'
import {marked} from 'marked';


const Previewer = ({contenido, closeWindow}) => {
  const [Open, setOpen] = useState(false);

  marked.setOptions({
    breaks: true
  })

  // const renderer = {
  //   heading(text, level) {
  
  //     return `
  //             <h${level}>
  //               <span class="header-link">${text}</span>
  //             </h${level}>`;
  //   }
  // };

  // marked.use({ renderer });

  // const tokenizer = {
  //   codespan(src) {
  //     const match = src.match(/^\$+([^\$\n]+?)\$+/);
  //     if (match) {
  //       return {
  //         type: 'codespan',
  //         raw: match[0],
  //         text: match[1].trim()
  //       };
  //     }
  //     return false;
  //   }
  // };

  // marked.use({ tokenizer });

  const openWindow = () => {
      const button = document.getElementById("button-op-pr");
      button.name = Open ? "expand-outline" : "contract-outline";
      setOpen(!Open);
  }
  

  return (
    <div className='windowScript' id='preview-window'>
        <div className='title-window'>
            <p id="preview-title">
                (<ion-icon name="flame-outline"></ion-icon>)
                Previewer
            </p>
            <a className='button-exp' href='#' onClick={() => {openWindow(); closeWindow('editor-window')}}>
                <ion-icon name="expand-outline" id="button-op-pr"></ion-icon>
            </a>
        </div>
        <div 
          className='content-window'
          id="preview"
          dangerouslySetInnerHTML={{__html: marked.parse(contenido)}}
        >
        </div>
    </div>
  )
}

export default Previewer;
