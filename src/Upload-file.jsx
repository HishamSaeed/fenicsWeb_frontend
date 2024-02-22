import { useState } from 'react';
import axios from 'axios';

function UploadFile() {

    const [ file, setFile ] = useState(null);
    const [ progress, setProgress ] = useState({ started: false, pc: 0 });
    const [ msg, setMsg ] = useState(null);

    function handleUpload() {
        if (!file) {
            console.log("No file selected")
            return;
        }

        const fd = new FormData();
        fd.append('file', file);

        setMsg("Uploading...")
        setProgress(prevState => {
            return { ...prevState, started: true }
        })
        axios.post('http://127.0.0.1:5000/upload_mesh', fd, {
            onUploadProgress: (progressEvent) => { setProgress(prevState => {
                return { ...prevState, pc: progressEvent.progress*100 }
            }) },
            headers: {
                "Custom-Header": "value",
            }
        })
        .then(res => {
            setMsg("Upload successful");
            console.log(res.data)
        })
        .catch(err => {
            setMsg("Upload failed");
            console.log(err)
        });
    }

    return (
        <div className='upload'>
            <h1>Uploading Files in React</h1>

            <input onChange={ (e) => { setFile(e.target.files[0]) }} type='file'/>
            
            <button onClick={ handleUpload }>Upload</button>

            { progress.started && <progress max="100" value={progress.pc}></progress> }
            { msg && <span>{ msg }</span> }
        </div>
    )
}

export default UploadFile;