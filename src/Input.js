import React, {useState} from "react";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';


function Input(props) {
  //I use this state to capture the value that is being typed into the form input
  const [input, setInput] = useState('');

  //When the add button or the enter button is clicked I save the new todo to localstorage
  //then I set the todo state that was initailized in the parent component
  const handleClick = (e) => {
    e.preventDefault()
    localStorage.setItem('todos', JSON.stringify({...props.todos, [uuidv4()]: {input: input.valueOf(), isChecked: false }}))
    props.setTodo({...props.todos, [uuidv4()]: {'input': input.valueOf(), 'isChecked': false }});
    setInput('');
    
  }

  return(
    <div>
          {/* here is the form, whenever there is a change the input state is constantly updated */}
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