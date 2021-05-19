import { Carousel } from 'react-bootstrap'

import './gallery.scss'

function Gallery(props) {
  return (
    <Carousel>
      {props.pictures.map((picture) => {
        return (
          <Carousel.Item key={picture.key}>
            <img
              className="d-block w-100"
              src={picture.src}
              alt="First slide"
            />
            <Carousel.Caption className="d-none d-md-block">
              <h3 className={picture.color}>{picture.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  )
}

export default Gallery
