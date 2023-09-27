import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardFood(props) {

    return (
        <Card style={{ width: '18rem' }}>
            {/* we can name it as we want i mean about props.image , props.img , ....*/}
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    write any description here you can choose whatever you want
                </Card.Text>
                <Button variant="primary">Try Recipe</Button>
            </Card.Body>
        </Card>
    )
}

export default CardFood;