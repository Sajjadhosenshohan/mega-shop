import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Sidebar from "../../components/Sidebar"

const MainLayout = () => {
    return (
        <div className="bg-secondary">
            <Navbar />
            <div className='container flex  px-6 py-4 mx-auto  min-h-[calc(100vh-156px)] gap-3'>
                <Sidebar />
                <div className="border border-purple-300 mx-auto  flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
