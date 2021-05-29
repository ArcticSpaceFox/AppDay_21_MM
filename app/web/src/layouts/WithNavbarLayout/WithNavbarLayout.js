import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const WithNavbarLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow min-h-full">{children}</div>
      <Footer />
    </div>
  )
}

export default WithNavbarLayout
