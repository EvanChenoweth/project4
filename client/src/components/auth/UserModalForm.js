import { Form, Button, Container, Modal } from 'react-bootstrap'
import React from 'react'

const ReviewModalForm = (props) => {
    // here are the props we're going to bring into our form
    const { userName,handleChange,handleUpdate,closeModal,
    show,navigate} = props

    return (
        <Container className="justify-content-center">
            <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>Leave a Review on this Profile</Modal.Header>
            <Modal.Body>
                <Form onSubmit={ handleUpdate }>
                    <Form.Label>Which user is leaving this review? (e-mail)</Form.Label>
                    <Form.Control 
                        placeholder="Type your email"
                        name="email"
                        id="email"
                        value={userName.firstName}
                        onChange={ handleChange }
                    />
                    <Form.Label>What is your rating of this user?: (1-10)</Form.Label>
                    <Form.Control 
                        placeholder="What is your rating?"
                        type="number"
                        name="rating"
                        value={userName.lastName}
                        onChange={ handleChange }
                    />
                    <Form.Label>Any Additional Comment: </Form.Label>
                    <Form.Control 
                        placeholder="type your comment"
                        id="comment"
                        name="comment"
                        value= { userName.email }
                        onChange={ handleChange }
                    />
                    <Button type="submit">Submit</Button>
                </Form>
            </Modal.Body>
            </Modal>
        </Container>
        
    )
}

export default ReviewModalForm