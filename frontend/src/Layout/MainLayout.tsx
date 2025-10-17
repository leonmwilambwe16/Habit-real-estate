
import Navbar from '../component/Navbar'
import { Outlet } from 'react-router-dom'
import '../Styles/MainLayout.scss'
import { Footer } from '../component/Footer'

const MainLayout = () => {
  return (
    <div>
     <Navbar/>
     <main className="main-content">
      <Outlet/>
     </main>
     <Footer/>
    </div>
  )
}

export default MainLayout  


