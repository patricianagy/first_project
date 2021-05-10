import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './NavigationBar.scss'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Brand from './brand.png'
import Hamburger from './hamburger.png'

function NavigationBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="p-6 ">
        <Navbar.Brand>
          <Image src={Brand} className="w-50 h-50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <Image src={Hamburger} />
        </Navbar.Toggle>
        <Navbar.Collapse className="grey" id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Gallery</Nav.Link>
            <Nav.Link>Pricing</Nav.Link>
            <Nav.Link>Faq</Nav.Link>
            <Nav.Link>Benefits</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Button variant="sign-in">Sign in</Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="sign-up">Sign up</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
