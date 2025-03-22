import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DOMPurify from 'dompurify'
import PagesGetterApi from "../api/PagesGetterApi";






export default function NavbarLayout(props) {
    



    var pages = props.pages
    console.log("from props.pages = ", pages)
    // const [pages, setPages] = useState([]);
    // const apiUrl = import.meta.env.VITE_DOTNET_PAGE_API_URL_TARGET;
    // const directApi = import.meta.env.VITE_DOTNET_API_TARGET; 
    
    // useEffect(() => {
    //     // Perform actions here that you want to execute after the component mounts

    //     axios.get(apiUrl).then(result => {
    //         // 'https://localhost:7033/api/react/asset')
    //         const pages = result.data;
    //         setPages(pages);
    //         console.log("pages = ", pages);
    //     })
        
    // }, [])


    // Sanitized Summernote Pages from API page
    // const pagesRendered = pages.map(page => <li key={page.title} className="col"><div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(page.content)}}></div></li>);

    
    // <p>{page.content}</p>
    // console.log("pagesRendered = ",pagesRendered);
    
    const MappingPages = () => {
        return (    
            <div className="text-sm lg:flex-grow">
            {       
                pages.map(page => <a key={page.title} href={page.title} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">{page.title}</a>)   
            }
            </div>
        )
    }

    useEffect(() => {
        
        pages = pages.map(page => page.title)
    }, [])
    
    return (
        
        <>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                    <span className="font-semibold text-xl tracking-tight">Goshehart.se</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">                    
                    <MappingPages />
                </div>
            </nav>
        </>
    )
}






