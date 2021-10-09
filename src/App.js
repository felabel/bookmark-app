import Header from './components/Header'
import Showcase from './components/Showcase'
import SecondShowcase from './components/SecondShowcase'
import Features from './components/Features'
import Download from './components/Download'
import Questions from './components/Questions'
import Footer from './components/Footer'

function App(){

  return (
    <div className="container">
      <Header />
      <Showcase />
      <Features />
      {/* <SecondShowcase /> */}
      <Download />
      <Questions />
      <Footer />
    </div>
  )
}

export default App