import React from 'react'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'
import DoughnutChart from '../../components/Chart/Doughnut.jsx'

const Chat = () => {
  return (
    <React.Fragment>
      <Container className="w-100 h-100 d-inline-block" fluid>
        <Row className="w-100 h-100 d-inline-block">
          <Col md='4' className="h-100 d-inline-block">
            <DoughnutChart className="w-100 h-100 d-inline-block"/>
          </Col>
          <Col md='4' className="h-100 d-inline-block">
            <DoughnutChart className="w-100 h-100 d-inline-block"/>
          </Col>
          <Col md='4' className="h-100 d-inline-block">
            <DoughnutChart className="w-100 h-100 d-inline-block"/>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default Chat
