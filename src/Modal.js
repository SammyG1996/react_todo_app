import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";

function MyModal(props) {
  //I use this state to capture the value that is being typed into the form input
  const [input, setInput] = useState(props.text);

  //The functions bellow will handle the differnt inputs

  //handleClose() sets the is edditing state in the parent component to false
  //in order to close the modal
  const handleClose = () => props.setIsEditing(false);

  //handleSave() will prevent the default refresh and then updated the todo state 
  //in the parent object. It will also then set local storage and close the modal
  //by setting the isEdditing prop to false in the parent
  const handleSave = (e) => {
    e.preventDefault();
    const newTodos = {...props.todos};
    newTodos[props.parentsId] = {'input': input, 'isChecked': props.isChecked};
    props.setTodo(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos))
    props.setIsEditing(false);
  }
 
  return(
    <div>

      <Modal show={props.isEditing} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body> 
          <Form onSubmit={handleSave}> 
            <Form.Control 
                  placeholder="" 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)}
                  /> 
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default MyModal