import { Col, Container, Image, Row } from 'react-bootstrap'
import Twitter from '../../assets/twitter.png'
import Email from '../../assets/email.png'
import Facebook from '../../assets/facebook.png'

import './footer.scss'

function Footer() {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col className="name mt-5" md={9}>
            ARShakir
          </Col>
          <Col md={3} className="my-5">
            <Image src={Email}></Image>
            <Image src={Twitter} className="ml-4"></Image>
            <Image src={Facebook} className="ml-4"></Image>
          </Col>
        </Row>
        <Row className="pages  justify-content-md-between">
          <Col md={2}>
            <p className="title">First</p>
            <p>First page</p>
            <p>Second page</p>
            <p>Third page</p>
            <p>Fourth page</p>
          </Col>
          <Col md={2}>
            <p className="title">Second</p>
            <p>First page</p>
            <p>Second page</p>
            <p>Third page</p>
            <p>Fourth page</p>
          </Col>
          <Col md={2}>
            <p className="title">Third</p>
            <p>First page</p>
            <p>Second page</p>
            <p>Third page</p>
            <p>Fourth page</p>
          </Col>
          <Col md={2}>
            <p className="title">Fourth</p>
            <p>First page</p>
            <p>Second page</p>
            <p>Third page</p>
            <p>Fourth page</p>
          </Col>
        </Row>
        <Row className="justify-content-md-center terms py-5">
          <Col md={2}>© Copyrights 2021 </Col>
          <Col md={2}>Privacy policy</Col>
          <Col md={2}>Terms of service</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
