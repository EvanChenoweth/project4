import { Form, Button, Container } from 'react-bootstrap'

const GuideForm = (props) => {
    // here are the props we're going to bring into our form
    const { guide, handleChange, heading, handleSubmit } = props

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
                <Form.Label>Guide Title: (required)</Form.Label>
                <Form.Control 
                    placeholder="Guide Title"
                    name="title"
                    id="title"
                    value= { guide.title }
                    onChange={ handleChange }
                />
                <Form.Label>Game: (required)</Form.Label>
                <Form.Control 
                    placeholder="Game"
                    name="game"
                    id="game"
                    value= { guide.game }
                    onChange={ handleChange }
                />
                <Form.Label>Guide Topic: (required)</Form.Label>
                <Form.Control 
                    placeholder="Guide Topic"
                    name="topic"
                    id="topic"
                    value= { guide.topic }
                    onChange={ handleChange }
                />
                <Form.Label>Content: (required)</Form.Label>
                <Form.Control 
                    placeholder="Type all Guide Content here"
                    name="content"
                    id="content"
                    value= { guide.content }
                    onChange={ handleChange }
                />
                <br />
                <Button type="submit">Submit</Button>
            </Form>
            <br />
        </Container>
    )
}

export default GuideForm