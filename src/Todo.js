import React, {useState} from "react";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import MyModal from "./Modal";


function Todo(props) {
  //This will set the value of the isChecked and isEdditing states
  //These states are use to determined if the todos are check or not 
  //and they will also determine when the edditing modal should appear
  const [isChecked, setIsChecked] = useState(props.isChecked);
  const [isEditing, setIsEditing] = useState(false);

  //This will handle deleting a todo and updating the local storage to 
  //reflect the new todo object
  const handelClick = () => {
    const newTodos = {...props.todos};
    delete newTodos[props.id]
    props.setTodo(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  //This will handle when the modal should appear
  const handleShow = () => setIsEditing(true);

  //this will handle updating the isChecked state to determine if a todo is checked
  const handleChecked = () => {
    changeIsChecked()
    setIsChecked(!isChecked);
  }

  //This will update the localstorage to reflect the new isChecked status
  const changeIsChecked = () => {
    const newTodo = {...props.todos};
    newTodo[props.id] = {'input': props.text, 'isChecked': !isChecked}
    console.log(newTodo)
    props.setTodo(newTodo);
    localStorage.setItem('todos', JSON.stringify(newTodo));
  }

  //This contains the code for the modal
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
      {/* This will determine if the modal should be open */}
      {isEditing ? showModal() : null}

      {/* This determines if the todo is checked */}
       <Card className={isChecked ? 'bg-secondary': 'bg-light'} >
         <Card.Body>
           <Row>
             <Col xs='10'>
               <Card.Text>
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