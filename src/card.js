import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function CardFood(props) {
    // use state return array
    // show =>  inital state  ****  setShow => update state
    let [show, setShow] = useState(false); // use state is a build-in function
  
    function handlShow(){// this function will update the inital value of use state as i write inside this function
        setShow(!show)
        
    }

    return (
      <> 
      
        <Card style={{ width: '18rem' }}>
            {/* we can name it as we want i mean about props.image , props.img , ....*/}
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                       
                </Card.Text>
                <Button variant="primary"onClick={handlShow}>Try Recipe</Button>
            </Card.Body>
        </Card>
        
    
        <Modal style={{left: "auto" , right: "400px"}} show={show} onHide={handlShow}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body> {props.description} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}

export default CardFood;