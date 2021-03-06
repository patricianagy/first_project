import { Container, Row, Col, Button, ResponsiveEmbed } from 'react-bootstrap'

import Gallery from '../gallery/gallery'

import './hero.scss'

import hero from '../../assets/hero.jpg'
import platypus from '../../assets/platypus.jpg'

function Hero() {
  const pictures = []
  pictures.push({
    key: 1,
    src: hero,
    color: 'light',
    caption: 'First slide',
  })

  pictures.push({
    key: 2,
    src: platypus,
    color: 'dark',
    caption: 'Second slide',
  })

  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <h1 className="heading">
            Many reasons to get up and start to get back in business
          </h1>

          <h5 className="subheading">
            The harder you work for something, the greater you'll feel when you
            achive it.
          </h5>

          <Row>
            <Col md={4}>
              <Button variant="button" block>
                Learn more
              </Button>
            </Col>
            <Col md={4}>
              <Button variant="outline-button" className="btn-demo" block>
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
                The harder you work for something, the greater you’ll feel when
                you achieve it.
              </p>
              <p className="link-text">Watch preview</p>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Gallery pictures={pictures} />
        </Col>
      </Row>
    </Container>
  )
}

export default Hero
