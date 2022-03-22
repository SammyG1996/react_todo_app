import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";

function MyModal(props) {

  const [input, setInput] = useState(props.text);

  const handleClose = () => props.setIsEditing(false);
  const handleSave = (e) => {
    e.preventDefault();

    const newTodos = {...props.todos};
    newTodos[props.parentsId] = input;
    props.setTodo(newTodos);
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