import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ImagesGetter() {
    const [assets, setAssets] = useState([]);
    const apiUrl = import.meta.env.VITE_DOTNET_API_URL_TARGET; 
    
    useEffect(() => {
        // Perform actions here that you want to execute after the component mounts
        console.log("App environment = ", `${import.meta.env.MODE}`);

        axios.get(apiUrl).then(result => {
            // 'https://localhost:7033/api/react/asset')
            const assets = result.data;
            setAssets([assets]);
            console.log("assets = ", assets);
        })
        
    }, [])

    return (
        <div className="container">
            <p>{assets.map(assets => assets.name)}</p>
            <div className='row'>
            <div className='col'>
                { <p>{assets.name}</p> }
            </div>
            <div className='col'>
                { <p>{assets.imageUrl}</p> }
            </div>
            <div className='col'>
                { <p>{assets.description}</p> }
            </div>
            <div className='col'>
                { <p>{assets.author}</p> }
            </div>
            </div>
        </div>
            

    )
}






