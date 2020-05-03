import React from 'react';
import './App.css';
import {Container,Col,Row} from 'reactstrap'
import Todo from './component/todo/index'

function App() {
  return (
    <Container className='my-3'>
      <Row>
        <Col>
          <Todo/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
