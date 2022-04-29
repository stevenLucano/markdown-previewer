import React, { useState } from 'react'

export default function Editor({newContent, closeWindow}) {
    
    const [Open, setOpen] = useState(false);

    const openWindow = () => {
        const windowEditor = document.getElementById('editor-window');
        windowEditor.classList.toggle("open");

        const button = document.getElementById("button-op-ed");
        button.name = Open ?  "expand-outline" : "contract-outline";
        setOpen(!Open);
    }
    
    return (
        
        <div className='windowScript' id='editor-window'>
            <div className='title-window'>
                <p id='editor-title'>
                    (<ion-icon name="flame-outline"></ion-icon>)
                    Editor
                </p>
                <a className='button-exp' href='#' id="btn-editor" onClick={() => {openWindow(); closeWindow('previewer-window');}}>
                    <ion-icon name="expand-outline" id="button-op-ed"></ion-icon>
                </a>
            </div>
            <textarea onChange={(e) => newContent(e.target.value)} id="editor"></textarea>
        </div>
    )
}
