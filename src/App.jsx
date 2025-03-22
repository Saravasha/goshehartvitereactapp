import { useState } from 'react'
import FooterLayout from "./layout/FooterLayout.jsx"
import HeaderLayout from "./layout/HeaderLayout.jsx"
import ComingSoonComponent from "./components/ComingSoonComponent.jsx"
import ImagesGetterComponent from "./components/ImagesGetterComponent.jsx"
import NavbarLayout from "./layout/NavbarLayout.jsx"
import AssetsGetterApi from "./api/AssetsGetterApi.jsx"
import PagesGetterApi from './api/PagesGetterApi.jsx' 
import SidebarLayout from './layout/SidebarLayout.jsx'

// import './assets/main.css'

function App() {
  const [count, setCount] = useState(0)
  console.log("App environment = ", `${import.meta.env.MODE}`);

  return (
    <>
      
      {/* <AssetsGetter> */}
        <HeaderLayout />
        <PagesGetterApi>
          <NavbarLayout />
        </PagesGetterApi>
        <SidebarLayout/>
        <ComingSoonComponent />
        <FooterLayout />
        {/* <ImagesGetter></ImagesGetter> */}

      {/* </AssetsGetter> */}

    </>

  
  )
}

export default App
