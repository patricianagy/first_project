import './hero.scss'
import Contaiener from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

function Hero() {
  return (
    <div>
      <Contaiener fluid className="Container">
        <Row>
          <Col md={5} className="l-3">
            <h1 className="Heading">
              Many reasons to get up and start to get back in business
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="l-3">
            <h5 className="Subheading">
              The harder you work for something, the greater you'll feel when
              you achive it.
            </h5>
          </Col>
        </Row>
        <Row>
          <Col md={2} className="l-3">
            <Button variant="learn-more">Learn more</Button>
          </Col>
          <Col className="l-2">
            <Button variant="learn-more">Learn more</Button>
          </Col>
        </Row>
      </Contaiener>
    </div>
  )
}

export default Hero
