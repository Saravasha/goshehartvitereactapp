import { useState } from 'react'
import Footer from "./layout/Footer.jsx"
import Header from "./layout/Header.jsx"
import ImagesGetter from "./components/ImagesGetter.jsx"
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <div className="border-black bg-sky-600">
      <img src="https://picsum.photos/300/300" alt="" id="1" className="w-2"/>
      <img src="https://picsum.photos/400/400" alt="" id="2" className="w-2"/>
      <img src="https://picsum.photos/500/500" alt="" id="3" className="w-3"/>
      <img src="https://picsum.photos/600/600" alt="" id="4" className="w-4"/>
      <span>sdpfsdkfsdokfosdkfosdf</span>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by JOhn Donh wwwwws wwwwääää why isnt this working
          addding more stuff for test
          adding another line to see changes
        </div>
        <ul>
          <li>
          <strong>Views: </strong>
          <strong>Downloads: </strong>
          <strong>Likes: </strong>
          <strong>BINGO</strong>
          <strong>we added something new &copy;</strong>
          <strong>we added something new EH???? &copy;</strong>
          </li>
        </ul>
      </div>
      <div className="px-6 py-4 bg-red-600">
        <span className="inline-block bg-gray-200 rounded-full px-3 py1 text-sm font-semibold text-gray-700 mr-2"></span>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py1 text-sm font-semibold text-gray-700 mr-2"></span>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py1 text-sm font-semibold text-gray-700 mr-2"></span>
      </div>
      <ImagesGetter></ImagesGetter>
    </div>
    <Footer></Footer>
    </>

  
  )
}

export default App
