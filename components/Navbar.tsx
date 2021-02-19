import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link href="/">
        <a className="navbar-brand">Láadan Dictionary</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/words">
              <a className="nav-link">Word List</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}