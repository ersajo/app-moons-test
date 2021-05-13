import React from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  Button
} from 'react-bootstrap'
import './Navbar.css'

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Link to="/" className="ms-3">
          <Navbar.Brand>
            Prueba Moons
          </Navbar.Brand>
        </Link>
        <Navbar.Collapse className="justify-content-end">
          <Link
            to="/charts">
            <Button
              className="me-1"
              variant="warning">
              Graficas
            </Button>
          </Link>
          <Link
            className="mx-3"
            to="/chat">
            <Button
              variant="warning">
              Chat
            </Button>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation