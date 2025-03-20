import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DOMPurify from 'dompurify'


export default function Navbar() {
    const [pages, setPages] = useState([]);
    const apiUrl = import.meta.env.VITE_DOTNET_PAGE_API_URL_TARGET;
    const directApi = import.meta.env.VITE_DOTNET_API_TARGET; 
    
    useEffect(() => {
        // Perform actions here that you want to execute after the component mounts

        axios.get(apiUrl).then(result => {
            // 'https://localhost:7033/api/react/asset')
            const pages = result.data;
            setPages(pages);
            console.log("pages = ", pages);
        })
        
    }, [])


    // Sanitized Summernote Pages from API page
    const pagesRendered = pages.map(page => <li key={page.title}><div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(page.content)}}></div></li>);


    // <p>{page.content}</p>
    console.log("pagesRendered = ",pagesRendered);


    return (
        <div className="navbar">
            <div>{pagesRendered}</div>
            <div className='row'>
                {/* <p>{pages.map(pages => pages.title)}</p>
                <div className='col'>
                    { <p>{pages.content}</p> }
                </div> */}
            </div>
        </div>
            

    )
}






