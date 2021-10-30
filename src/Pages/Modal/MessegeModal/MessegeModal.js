import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const MessegeModal = (props) => {
    return (
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          Message Box
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter your Name"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter your Email Address"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Mobile Number:</Form.Label>
                <Form.Control type="Number" placeholder="Enter your Mobile Number"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label controlId="exampleForm.ControlTextarea1">Message:</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="your message"></Form.Control>
            </Form.Group>
            <Button variant="success" type="submit" className="my-3">Send Message</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
};

export default MessegeModal;