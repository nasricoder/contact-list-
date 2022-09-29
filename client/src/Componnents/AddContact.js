import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddContact =()=>{
    return(
        <div>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
         </Form.Group>
        
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter age" />
         </Form.Group>
        
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
         </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    )
}
export default AddContact