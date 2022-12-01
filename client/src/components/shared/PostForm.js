import { Form, Button, Container } from 'react-bootstrap'

const PostForm = (props) => {
    // here are the props we're going to bring into our form
    const { post, handleChange, heading, handleSubmit } = props

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
                <Form.Label>Name of game: (required)</Form.Label>
                <Form.Control 
                    placeholder="Game Name"
                    name="game"
                    id="game"
                    value= { post.game }
                    onChange={ handleChange }
                />
                <Form.Label>Game mode: (required)</Form.Label>
                <Form.Control 
                    placeholder="Game mode"
                    name="mode"
                    id="mode"
                    value= { post.mode }
                    onChange={ handleChange }
                />
                <Form.Label>How many more players can join?: (required)</Form.Label>
                <Form.Control 
                    placeholder="How many more players can join?"
                    name="players"
                    id="players"
                    value= { post.players }
                    onChange={ handleChange }
                />
                <Form.Label>Additional Info: </Form.Label>
                <Form.Control 
                    placeholder="Any additional info"
                    name="info"
                    id="info"
                    value= { post.info }
                    onChange={ handleChange }
                />
                <br />
                <Button type="submit">Submit</Button>
            </Form>
            <br />
        </Container>
    )
}

export default PostForm