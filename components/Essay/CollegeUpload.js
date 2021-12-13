// styles
import panelStyles from '../../styles/ProfilePanels.module.scss'
// dropzone 
import {useDropzone} from 'react-dropzone';
// icons 
import imgUpload from '../../public/upload_file_icon.svg'
import fileUpload from '../../public/file_icon_sm.svg'

// plugs 
import Image from 'next/image';
import { useState } from 'react';

const CollegeUpload = () => {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const files = acceptedFiles.map((file, i) => (
        <li className={panelStyles.fileDisplay} key={file.path}>
           <Image src={fileUpload} width={23} height={30} alt='uploaded file icon' /> 
           <span>{file.path} <button type="button" className={panelStyles.deleteUpload} onClick={() => removeFile(i)}>x</button></span>
        </li>
    ));
    const removeFile = file => {
        const newFiles = [...files];     // make a var for the new array
        acceptedFiles.splice(file, 1);        // remove the file from the array
        setFileError(true)
    };
    const [fileError, setFileError] = useState(false);
    
    return (
        <div className={panelStyles.dropzoneWrap} {...getRootProps()} style={files.length>0?{border: '3px dashed #2CBEFF'}:{border: '3px dashed #96AABE'}}>
            <input 
            required 
            disabled={files.length > 0} 
            {...getInputProps()} 
            />
            {files.length>0?
            files
            :
            <>
            <Image src={imgUpload} width={35} height={30} alt='upload icon' />
            <p>Drag and drop here, or <span>browse</span></p>
            </>
            }
        </div>
    );
}

export default CollegeUpload;