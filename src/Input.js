import React, {useState} from "react";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';


function Input(props) {
  const [input, setInput] = useState('');

  const handleClick = (e) => {
    e.preventDefault()
    localStorage.setItem('todos', JSON.stringify({...props.todos, [uuidv4()]: {input: input.valueOf(), isChecked: false }}))
    props.setTodo({...props.todos, [uuidv4()]: {'input': input.valueOf(), 'isChecked': false }});
    setInput('');
    
  }

  return(
    <div>
     
          <Form className="d-flex m-2" fluid onSubmit={handleClick}>
            <FormControl
              placeholder="Add Item"
              className="me-2 d-flex"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <Button variant="primary" onClick={handleClick}>Add</Button>
          </Form>
      
    </div>
  )
}

export default Input