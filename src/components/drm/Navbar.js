import { faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">
        <b>Document Rights Mngmt</b>
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
          Profile
          <FontAwesomeIcon className="ml-1" icon={faUser}></FontAwesomeIcon>
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
