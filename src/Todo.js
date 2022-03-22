import React, {useState} from "react";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import MyModal from "./Modal";


function Todo(props) {

  const [isChecked, setIsChecked] = useState(props.isChecked)
  const [isEditing, setIsEditing] = useState(false)

  const handelClick = () => {
    const newTodos = {...props.todos};
    delete newTodos[props.id]
    props.setTodo(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
   
  }

  const handleShow = () => setIsEditing(true);

  const handleChecked = () => {
    changeIsChecked()
    setIsChecked(!isChecked);
  }

  const changeIsChecked = () => {
    const newTodo = {...props.todos};
    newTodo[props.id] = {'input': props.text, 'isChecked': !isChecked}
    console.log(newTodo)
    props.setTodo(newTodo);
    localStorage.setItem('todos', JSON.stringify(newTodo));
  }

  const showModal = () => {
      return(
        <MyModal 
        setIsEditing={setIsEditing} 
        isEditing={isEditing}
        text={props.text}
        setTodo={props.setTodo} 
        todos={props.todos}
        parentsId={props.id}
        isChecked={isChecked}
        />
      )
  }


  return(
    <div>

      {isEditing ? showModal() : null}

       <Card className={isChecked ? 'bg-secondary': 'bg-light'} >
         <Card.Body>
           <Row>
             <Col xs='10'>
               <Card.Text className='align-items-center'>
                 {props.text}
               </Card.Text>
             </Col>
             <Col xs='2'>
             <Button variant="success" size='sm' className='m-1' onClick={handleChecked}><i className="fa-solid fa-check"></i></Button>
               <Button variant="primary" size='sm' className='m-1' onClick={handleShow}><i className="fa-solid fa-pen-to-square"></i></Button>
               <Button variant="danger" size='sm' className='m-1' onClick={handelClick}><i className="fa-solid fa-trash"></i></Button>
             </Col>
           </Row>
         </Card.Body>
       </Card>

    </div>
  )
}

export default Todo