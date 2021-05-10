import './hero.scss'
import Contaiener from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import hero from './hero.jpg'

function Hero() {
  return (
    <div>
      <Contaiener className="ml-6">
        <Row>
          <Col lg={7}>
            <Contaiener fluid className="Container">
              <Row>
                <Col>
                  <h1 className="Heading">
                    Many reasons to get up and start to get back in business
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5 className="Subheading">
                    The harder you work for something, the greater you'll feel
                    when you achive it.
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button variant="learn-more">Learn more</Button>
                  <Button variant="demo">Demo</Button>
                </Col>
              </Row>
            </Contaiener>
          </Col>
          <Col lg={5}>
            <Contaiener fluid>
              <Row>
                <Col lg={{ span: 12 }} className="mt-6">
                  <Image src={hero} alt="Hero" rounded fluid />
                </Col>
              </Row>
            </Contaiener>
          </Col>
        </Row>
      </Contaiener>
    </div>
  )
}

export default Hero
