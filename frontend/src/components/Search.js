import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

const Search = ({ word, setWord, handleSubmit }) => {
    return (
      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group as={Row}>
                <Col xs={9}>
                  <Form.Control
                    type="text"
                    value={word}
                    onChange={ (e) => setWord(e.target.value) }
                    placeholder="Search for new image..." />
                </Col>
   
                <Col>
                  <Button variant="primary" type="submit">Search</Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };

export default Search