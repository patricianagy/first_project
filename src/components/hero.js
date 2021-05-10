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
          <Col md={5}>
            <Contaiener fluid className="ml-6">
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
                <Col md={4}>
                  <Button variant="learn-more" block>
                    Learn more
                  </Button>
                </Col>
                <Col md={4}>
                  <Button variant="demo" block>
                    Demo
                  </Button>
                </Col>
              </Row>
              <Row className="my-5">
                <Col md={4}>
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
          <Col md={6}>
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
