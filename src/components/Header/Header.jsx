import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Header.css'


export const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Rick and Morty</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className="link" to="/">Characters</Link>
                    <Link className="link" to="/episodes">Episodes</Link>
                    <Link className="link" to="/locations">Locations</Link>
                </Nav>
            </Navbar>
        </>
    )
}