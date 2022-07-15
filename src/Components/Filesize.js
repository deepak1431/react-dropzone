import React from 'react'
import { useDropzone } from 'react-dropzone'
const Filesize = () => {

    // const[files,setFiles]=useState([])
    const {getRootProps,getInputProps,acceptedFiles,fileRejections}=useDropzone({
      maxFiles:2
    });
        
        const acceptedFileItems = acceptedFiles.map(file => (
            <li key={file.path}>
              {file.path} - {file.size} bytes
            </li>
          ));
        
          const fileRejectionItems = fileRejections.map(({ file, errors }) => (
            <li key={file.path}>
              {file.path} - {file.size} bytes
              <ul>
                {errors.map(e => (
                  <li key={e.code}>{e.message}</li>
                ))}
              </ul>
            </li>
          ))
         

            return (
            <section className="dropArea">
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p className='text'>Drag 'n' drop some files here, or click to select files</p>
                <em >(2 files are the maximum number of files you can drop here)</em>
              </div>
              <aside>
                <h4>Accepted files</h4>
                <ul>{acceptedFileItems}</ul>
                <h4>Rejected files</h4>
                <ul>{fileRejectionItems}</ul>
              </aside>
            </section>
          );
            }
   
  
    

export default Filesize