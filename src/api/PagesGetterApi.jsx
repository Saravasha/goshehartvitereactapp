import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DOMPurify from 'dompurify'
import NavbarLayout from '../layout/NavbarLayout'


export default function PagesGetterApi() {
    const [pages, setPages] = useState([]);
    const apiUrl = import.meta.env.VITE_DOTNET_PAGE_API_URL_TARGET;
    // const directApi = import.meta.env.VITE_DOTNET_API_TARGET; 
    
    useEffect(() => {
        // Perform actions here that you want to execute after the component mounts

        axios.get(apiUrl).then(result => {
            const pages = result.data;
            setPages(pages);
            console.log("pages = ", pages);
        })
        
    }, [])

    // Sanitized Summernote Pages from API page
    // const pagesRenderedApi = pages.map(page => <li key={page.title}><div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(page.content)}}></div></li>);

    // console.log("pagesRenderedApi = ",pagesRenderedApi);


    return (
        // <>

        // </>
        <NavbarLayout pages={pages}></NavbarLayout>
        // [pages]
    )
}






