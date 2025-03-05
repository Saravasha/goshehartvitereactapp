import { useState } from 'react'
import Footer from "./layout/Footer.jsx"
import Header from "./layout/Header.jsx"
import ComingSoon from "./components/ComingSoon.jsx"
import ImagesGetter from "./components/ImagesGetter.jsx"
// import './assets/main.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header></Header> test */}
      <ComingSoon></ComingSoon>
      <ImagesGetter></ImagesGetter>
      {/* <Footer></Footer> */}
    </>

  
  )
}

export default App
