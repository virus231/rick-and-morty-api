import {Button, Col} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import {useState} from "react";
import {CharacterDetailsInfo} from "../CharacterDetailsInfo/CharacterDetailsInfo";


export const CharacterCard = ({image, gender, name, status, species, type, created}) => {
    const [modalShow, setModalShow] = useState(false);
    const [details, setDetails] = useState({
        image,
        gender,
        name,
        status,
        species,
        type,
        created,
    });

    return (
        <Col lg="3" className="mb-3 mt-3">
            <Card >
                <Card.Img variant="top" src={image} className="img-fluid" />
                <Card.Body>
                    <Card.Text>Name: {name}</Card.Text>
                    <Card.Text>Gender: {gender}</Card.Text>
                    <Button onClick={() => setModalShow(true)} variant="primary">Details Info</Button>
                </Card.Body>
            </Card>
            <CharacterDetailsInfo {...details}  show={modalShow} onHide={() => setModalShow(false)}/>
        </Col>
    )
}