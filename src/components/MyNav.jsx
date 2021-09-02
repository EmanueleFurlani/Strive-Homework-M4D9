import { Navbar, Nav } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

const MyNav = ({ title, color, location}) => {
  
    return (
        <Navbar collapseOnSelect expand="lg" bg={color} variant={color}>
            <Navbar.Brand href="#home">{title} - Strive for book</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/home">
                    <div className={
                            location.pathname === '/home'
                                ? "nav-link ml-3 active"
                                : "nav-link ml-3"
                        }>Home</div>
                    </Link>
                    <Link to="/register">
                    <div className={
                            location.pathname === '/register'
                                ? "nav-link ml-3 active"
                                : "nav-link ml-3"
                        }>Registration</div>
                    </Link>
                    <div className="nav-link ml-3">Browse</div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(MyNav)

