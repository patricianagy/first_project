import Hero from './components/hero/hero.js'
import NavigationBar from './components/navigationBar/navigationBar.js'
import Footer from './components/footer/footer.js'
import Counter from './components/counter/counter.js'
import ModalWindow from './components/modal/modal.js'
import NumberConverter from './components/numberConverter/numberConverter.js'
import { Button } from 'react-bootstrap'
import { useState } from 'react'

function App() {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return (
    <div className="app px-5 py-3">
      <NavigationBar />
      <Hero />
      <Counter start={0} end={5} prefix="~" duration={5} />

      <Button variant="button" onClick={handleShow} className="my-5">
        Open modal
      </Button>

      <ModalWindow
        show={show}
        onClick={handleClose}
        onHide={handleClose}
        title="MODAL window"
        bodyText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus
        magna, semper et cursus vitae, scelerisque vitae odio. Curabitur
        euismod tristique ullamcorper. Ut sagittis ante tellus, eu luctus
        elit pretium nec."
        buttonText="Close"
      />
      <NumberConverter />
      <Footer />
    </div>
  )
}

export default App
