import React from 'react';
import { Card, Form, Col, Container, Row, ListGroup } from 'react-bootstrap'
const detail = (props) => {
    console.log(props.location.state.user)
    return (
        <Container style={{ marginTop: 50 }}>
            <Row>
                <Col sm={10}>
                    <Form>
                        <Form.Group as={Row} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Email
                        </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue="email@example.com" />
                            </Col>
                        </Form.Group>
                            <hr/>
                        <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Password
                        </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                        </Form.Group>
                    </Form>
                </Col>

                {/* <Card style={{ width: '80rem' }}>
     <Card.Header> {props.location.state.user.first_name} {props.location.state.user.last_name}</Card.Header>
     <ListGroup variant="flush">
       <ListGroup.Item>Age {props.location.state.user.age}</ListGroup.Item>
       <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
       <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
     </ListGroup>
   </Card> */}
            </Row>
        </Container>
    )
}
export default detail;