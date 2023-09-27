
import './App.css'
import Navbar from './components/Navbar'
import ContentTop from './components/ContentTop'
import Footer from './components/Footer'
import ContentBottom from './components/ContentBottom'
import BoostLinks from './components/BoostLinks'

function App() {
 

  return (
    <div className='bg-white w-screen'>
      <Navbar/>
      <ContentTop/>
      <ContentBottom/>
      <BoostLinks/>
      <Footer/>
    </div>
  )
}

export default App
