import { Navbar, Nav, Button, Image } from 'react-bootstrap'

import Brand from './brand.png'
import Hamburger from './hamburger.png'

import './NavigationBar.scss'

function NavigationBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand>
          <Image src={Brand} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <Image src={Hamburger} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Gallery</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
            <Nav.Link>Faq</Nav.Link>
            <Nav.Link>Benefits</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button variant="outline-button">Sign in</Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="button">Sign up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
