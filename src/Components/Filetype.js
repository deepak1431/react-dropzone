import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
const Filetype = () => {

    const[files,setFiles]=useState([])
    const {getRootProps,getInputProps,acceptedFiles,fileRejections}=useDropzone({
        accept:{
            'image/jpeg' :[],
            'image/png'  :[]
        },
        onDrop:(acceptedFiles) => {
          setFiles(

            acceptedFiles.map(file=>Object.assign(file,{
                preview:URL.createObjectURL(file)
                
            }))
          )
          console.log(acceptedFiles);
        }
    })
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
          const images=files.map(file=>(
            <img key={file.name}src={file.preview} alt="image" style={{width:'200px',height:'200px'}}/>
            
          ))

            return (
            <section className="dropArea">
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p className='text'>Drag 'n' drop some files here, or click to select files</p>
                <em >(Only *.jpeg and *.png images will be accepted)</em>
              </div>
              <aside>
                <h4>Accepted files</h4>
                <ul>{images}</ul>
                <h4>Rejected files</h4>
                <ul>{fileRejectionItems}</ul>
              </aside>
            </section>
          );


  
}

export default Filetype