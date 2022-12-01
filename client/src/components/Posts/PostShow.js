import React, { useEffect, useState } from "react"
import { Card } from 'react-bootstrap'
import { Form, Button, Container } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { postShow, postUpdate, postDelete } from "../../api/post"
import PostUpdate from "./PostUpdate"

const PostShow = ({ user, msgAlert}) => {

    const [post, setPost] = useState({})
    const [quantity, setQuantity] = useState({})

    const { id } = useParams()
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    // const [isDeleteShown, setIsDeleteShown] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        postShow(user, id)
        .then(res => {
            setPost(res.data.post)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Show Item Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current item
        // then comma and modify the key to the value you need
        setPost({...post, [event.target.name]: event.target.value})
    }

    const handleUpdatePost = () => {
        postUpdate(post, user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Update Post',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Update Post Failure' + error,
                variant: 'danger'
            })
        })
    }

    const handleDeletePost = () => {
        postDelete(user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Delete Post Success',
                variant: 'success'
            })
            navigate('/posts')
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Delete Post Failure' + error,
                variant: 'danger'
            })
        })
    }

    const cardContainerLayout = {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center'
    }

    return(
        <>
            <Card style={{ width: '90vw', margin: 5, color: 'white'}} bg="dark">
                <Card.Header>Game: {post.game}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p>Game Mode: {post.mode}</p>
                        <p>Players needed: {post.players}</p>
                        <p>Additional Info: {post.info}</p>
                        <Button onClick={toggleShowUpdate}>Update</Button>
                        <Button onClick={handleDeletePost}>Delete</Button>
                    </Card.Text>
                </Card.Body>
            </Card>

            {isUpdateShown && (
                <PostUpdate post={post}
                    handleChange={handleChange}
                    handleUpdatePost={handleUpdatePost}
                />
            )}
        </>
    )
}

export default PostShow