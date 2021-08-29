import Link from 'next/link'
import NavBar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <NavBar expand="lg" className={styles.navbar}>
      <Link href="/" passHref><NavBar.Brand>Láadan Dictionary</NavBar.Brand></Link>
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
          <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>
          <Link href="/words" passHref><Nav.Link>Word List</Nav.Link></Link>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  )
}