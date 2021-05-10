import './hero.scss'
import Contaiener from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import hero from './hero.jpg'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

function Hero() {
  return (
    <div>
      <Contaiener fluid>
        <Row>
          <Col lg={5} md={11} xs={11}>
            <Contaiener fluid className="ml-6">
              <Row>
                <Col xs={12}>
                  <h1 className="Heading">
                    Many reasons to get up and start to get back in business
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col xs={11}>
                  <h5 className="Subheading">
                    The harder you work for something, the greater you'll feel
                    when you achive it.
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col md={4} xs={6}>
                  <Button variant="learn-more" className="mh-100" block>
                    Learn more
                  </Button>
                </Col>
                <Col md={4} xs={6} className="ml-sm-4">
                  <Button variant="demo" className="mh-100" block>
                    Demo
                  </Button>
                </Col>
              </Row>
              <Row className="my-5">
                <Col md={4} xs={4}>
                  <ResponsiveEmbed aspectRatio="16by9">
                    <iframe
                      src="https://www.youtube.com/embed/7yLxxyzGiko"
                      frameBorder="0"
                      allow="autoplay"
                      allowFullScreen
                      title="video"
                    />
                  </ResponsiveEmbed>
                </Col>
                <Col>
                  <p className="basic-text">
                    The harder you work for something, the greater you’ll feel
                    when you achieve it.
                  </p>
                  <p className="link-text">Watch preview</p>
                </Col>
              </Row>
            </Contaiener>
          </Col>
          <Col lg={7} md={12} xs={12}>
            <Contaiener fluid>
              <Row>
                <Col className="mt-6">
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
