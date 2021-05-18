import { Button, Modal } from 'react-bootstrap'

function ModalWindow(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.bodyText}</p>
          <Button onClick={props.onHide}>{props.buttonText}</Button>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalWindow
