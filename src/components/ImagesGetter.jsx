import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ImagesGetter() {
    const [assets, setAssets] = useState([]);
    // state = {
    //     people: []
    // }


    useEffect(() => {
        // Perform actions here that you want to execute after the component mounts
        axios.get('https://localhost:7033/api/react/').then(result => {
            const assets = result.data;
            setAssets([assets]);
            console.log("assets = ", assets);

            console.log("asset name = ", assets.name);
            
        })
        
    }, [])

    return (
    <></>
            // <div className="container">
            //     <div className='row'>
            //     {/* <b className='col'>Name</b>
            //     <b className='col'>Phone Number</b>
            //     <b className='col'>Residence (City)</b>
            //     <b className='col'>Country</b> */}
            //     <b className='col'></b>
            //     </div>
            //     <div className='row'>
            //     <div className='col'>
            //     {/* <p>{assets.name}</p> */}
            //     </div>
            //     <div className='col'>
            //     {/* <p>{assets.imageUrl}</p> */}
            //     </div>
            //     <div className='col'>
            //     <p>{assets}</p>
            //     </div>
            //     <div className='col'>
            //     {/* <button className="btn btn-danger btn-sm" onClick={() => DeletePerson(person.id)}>Delete</button> */}
            //     </div>
            //     </div>
            // </div>
            /* <SortPeopleList  people={this.state.people}></SortPeopleList> */
            /* <Link className="btn btn-primary m-1" to={"/Create"}>Create New Person</Link> */
            

    )
}






