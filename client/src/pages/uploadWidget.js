import React from "react";
import { useEffect, useRef } from "react";

const UploadWidget = ()=> {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() =>{
        cloudinaryRef.current = window.cloudinary;
        console.log(cloudinaryRef.current);
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName:'dw0jmj5xy',
            uploadPreset:'cwmwrpka'
        }, function(error,result){
           console.log(result); 
        })
    }, [])
    return (
        <button onClick = {()=> widgetRef.current.open()}>
            upload button
        </button>
    )
}

export default UploadWidget;