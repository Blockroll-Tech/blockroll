import Header from './components/Header'
import Introduction from './components/Introduction'
import Card from './components/Card'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Footers from './components/Footer'
import Navbars from './components/Navbar'

function App() {
  return (
    <div className='font-poppins'>
      <Header />
      <div className='p-3'>
        <Introduction />
        <Card />
        <Testimonials />
        <Faq />
        <Footers />
      </div>
    </div>
  )
}

export default App
