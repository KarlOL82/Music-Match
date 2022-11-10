import React from "react";
import { useEffect, useRef } from "react";

const UploadWidget = ()=> {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() =>{
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: "dw0jmj5xy",
    uploadPreset: "cwmwrpka",
    sources: [
        "local",
        "url",
        "dropbox",
        "google_drive"
    ],
    googleApiKey: "<image_search_google_api_key>",
    showAdvancedOptions: false,
    cropping: true,
    multiple: false,
    defaultSource: "local",
    styles: {
        palette: {
            window: "#464040",
            sourceBg: "#292222",
            windowBorder: "#c7a49f",
            tabIcon: "#cc6600",
            inactiveTabIcon: "#E8D5BB",
            menuIcons: "#ebe5db",
            link: "#ffb107",
            action: "#ffcc00",
            inProgress: "#99cccc",
            complete: "#78b3b4",
            error: "#ff6666",
            textDark: "#4C2F1A",
            textLight: "#D8CFCF"
        },
        fonts: {
            default: null,
            "'Merriweather', serif": {
                url: "https://fonts.googleapis.com/css?family=Merriweather",
                active: true
            }
        }
    }
},
 (err, info) => {
   if (!err) {    
     console.log("Upload Widget event - ", info);
   }
        })
    }, [])
    return (
        <button onClick = {()=> widgetRef.current.open()}>
            upload button
        </button>
    )
}

export default UploadWidget;