import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <NavBar expand="lg" className={styles.navbar}>
      <NavBar.Brand href="/">Láadan Dictionary</NavBar.Brand>
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/words">Word List</Nav.Link>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  )
}