import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
    const [pages, setPages] = useState([]);
    const apiUrl = import.meta.env.VITE_DOTNET_PAGE_API_URL_TARGET; 
    
    useEffect(() => {
        // Perform actions here that you want to execute after the component mounts

        axios.get(apiUrl).then(result => {
            // 'https://localhost:7033/api/react/asset')
            const pages = result.data;
            setPages([pages]);
            console.log("pages = ", pages);
        })
        
    }, [])


    return (
        <div className="navbar">
            {/* <div>{arrayRenderer}</div> */}
            <div className='row'>
            <p>{pages.map(pages => pages.title)}</p>
                <div className='col'>
                    { <p>{pages.content}</p> }
                </div>
            </div>
        </div>
            

    )
}






