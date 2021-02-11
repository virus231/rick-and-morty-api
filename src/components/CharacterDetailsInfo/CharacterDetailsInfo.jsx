import {Button, Col, Modal, Row} from "react-bootstrap";

export const CharacterDetailsInfo = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="align-items-center">
                    <Col lg="6">
                        <div>
                            <h4>Details Info:</h4>
                            <p>Gender: {props.gender}</p>
                            <p>Status: {props.status}</p>
                            <p>Type: {props.type ? props.type : "Unknown"}</p>
                            <p>Species: {props.species}</p>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div>
                            <img className="img-fluid" src={props.image} alt=""/>
                        </div>
                    </Col>
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}