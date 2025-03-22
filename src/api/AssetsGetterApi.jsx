import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AssetsGetterApi() {
    const [assets, setAssets] = useState([]);
    const apiUrl = import.meta.env.VITE_DOTNET_ASSET_API_URL_TARGET; 
    // const directApi = import.meta.env.VITE_DOTNET_API_TARGET;

    useEffect(() => {
        // Perform actions here that you want to execute after the component mounts
        

        axios.get(apiUrl).then(result => {
            const assets = result.data;
            setAssets(assets);
            console.log("assets = ", assets);
        })
    }, [])
    
    // const assetsRenderedApi = assets.map(asset => <li key={asset.id}><p>{asset.name}</p><img alt={asset.name} src={directApi+asset.imageUrl}></img></li>);

    // console.log("assetsrenderedApi = ",assetsRenderedApi);

    return (    
        <>
        </>
        // [assets]
    )
}






