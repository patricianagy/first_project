import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function ModalWindow() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <Button variant="button" onClick={handleShow} className="my-5">
        Open modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modaaaal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus
            magna, semper et cursus vitae, scelerisque vitae odio. Curabitur
            euismod tristique ullamcorper. Ut sagittis ante tellus, eu luctus
            elit pretium nec.
          </p>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalWindow
