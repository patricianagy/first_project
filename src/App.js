import Hero from './components/hero/hero.js'
import NavigationBar from './components/navigationBar/navigationBar.js'
import Footer from './components/footer/footer.js'
import Counter from './components/counter/counter.js'
import ModalWindow from './components/modal/modal.js'

function App() {
  return (
    <div className="app px-5 py-3">
      <NavigationBar />
      <Hero />
      <Counter />
      <ModalWindow />
      <Footer />
    </div>
  )
}

export default App
