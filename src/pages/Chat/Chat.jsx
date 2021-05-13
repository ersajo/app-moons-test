import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext.js'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'

const Chat = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            Chats
          </Col>
        </Row>
      </Container>
      { isAuth ? <Redirect to="/" /> : null}
    </React.Fragment>
  )
}

export default Chat
