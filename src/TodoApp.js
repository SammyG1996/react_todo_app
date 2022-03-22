import React, {useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Todo from "./Todo";
import Input from './Input'

function TodoApp() {

  //When the app is first loaded the todo state will be set to localstorage
  useEffect(()=>{
    const todos = localStorage.getItem('todos')
    setTodos(JSON.parse(todos))
  }, [])

  //This containes the todos state
  const [todos, setTodos] = useState({1234: {'input': '', isChecked: null}});
  

  
  return(
    <div>
      <Navbar bg="dark" variant="dark" fluid>
        <Container fluid className='p-2'>
          <Navbar.Brand href="#home">
            <img
              alt="Check Icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/To_Do.svg/512px-To_Do.svg.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          To Do List
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Contains Input Field */}
      <Container fluid>
            <Row>
              <Col xs='0' md='1' ></Col>

              <Col> <Input todos={todos} setTodo={setTodos}/> </Col>

              <Col xs='0' md='1' ></Col>
            </Row>
      </Container>
      {/* Contains Individual Todos */}
      <Container fluid>
            <Row>
              <Col xs='0' md='2' ></Col>

              <Col> 
              {/* I map over the objects keys and use that to access the 
              contents in the object and i also return each time a new todo */}
              {Object.keys(todos).map((item, i) => {
                const todo = todos[item];
                return <Todo 
                text={todo['input']} 
                isChecked={todo['isChecked']}
                setTodo={setTodos} 
                todos={todos} 
                id={item}
                key={item}
                />
              })}
              
              </Col>

              <Col xs='0' md='2' ></Col>
            </Row>
      </Container>
    </div>
  )
}

export default TodoApp