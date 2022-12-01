import React, { useState } from 'react' 
import { postCreate } from '../../api/post'
import { useNavigate } from 'react-router-dom'

import PostForm from '../shared/PostForm'

const PostCreate = ({ user, msgAlert }) => {
    const navigate = useNavigate()

    const defaultPost = {
        game: '',
        mode: '',
        players: '',
        info: ''
    }

    const [post, setPost] = useState(defaultPost)

    const handleChange = (e) => {
        // to keep the values as users input info 
        // first spread the current pet
        // then comma and modify the key to the value you need
        // this was fine for the old way of building a pet
        // need new stuff to handle new data types number and boolean
        // setPet({...pet, [event.target.name]: event.target.value})
        setPost(prevPost => {
            const updatedName = e.target.name
            let updatedValue = e.target.value
            // this handles our number type
            if (e.target.type === 'number') {
                // this looks at the input type and changes from the default type of string to an actual number
                updatedValue = parseInt(e.target.value)
            }

            const updatedPost = { [updatedName]: updatedValue }

            return { ...prevPost, ...updatedPost }
        })
    }

    const handleCreatePost = (e) => {
        e.preventDefault()
        
        postCreate(post, user)
            .then(res => { navigate(`/posts/${res.data.post.id}`)})
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Create Post',
                    variant: 'success'
                })
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Create Post Failure' + error,
                    variant: 'danger'
                })
            })
    }

    return (
        <PostForm
            post={ post }
            handleChange={ handleChange }
            heading="Create a new looking for game post!"
            handleSubmit={ handleCreatePost }
        />
	)
}

export default PostCreate