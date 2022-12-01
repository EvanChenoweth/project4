import React, { useEffect, useState } from 'react' 
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { postIndex } from '../../api/post'

const PostIndex = ({ user, msgAlert }) => {

    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        postIndex(user)
        .then(res => {
            setAllPosts(res.data.posts)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Posts Failure' + error,
                variant: 'danger'
            })
        })
    }, [])


    const postCards = allPosts.map(post => (
        <Card key={ post.id } style={{ width: '90vw', margin: 5, color: 'white'}} bg="dark">
            <Card.Header>
                <Link to={ `/posts/${post._id}` }>{ post.game } Lobby needs { post.players } more players</Link>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    Game: {post.game}
                    <br />
                    Game Mode: {post.mode}
                    <br />
                    Players Needed: {post.players}
                    <br />
                    Additional Info: {post.info}
                    <br />
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        //style={ cardContainerLayout }
        <div className='container-md' >
            {/* <ul>{allItemsJSX}</ul> */}
            { postCards }
        </div>
    )
}

export default PostIndex