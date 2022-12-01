import { Form, Button, Container } from 'react-bootstrap'

const ReviewForm = (props) => {
    // here are the props we're going to bring into our form
    const { review, handleChange, heading, handleSubmit } = props

    const white = {
        backgroundColor: 'rgb(34, 37, 41)',
        marginTop: '5vh',
        color: 'white'
    }

    return (
        <Container className="justify-content-center" style={white}>
            <br />
            <h3>{ heading }</h3>
            <Form onSubmit={ handleSubmit }>
                <Form.Label>Review this profile? (1-10)</Form.Label>
                <Form.Control 
                    placeholder="Your Review (1-10)"
                    name="review"
                    id="review"
                    type="number"
                    value= { review }
                    onChange={ handleChange }
                />
                <br />
                <Button type="submit">Submit</Button>
            </Form>
            <br />
        </Container>
    )
}

export default ReviewForm