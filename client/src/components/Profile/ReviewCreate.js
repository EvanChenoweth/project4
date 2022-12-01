import React, { useState } from 'react' 
import { reviewCreate } from '../../api/review'
import { useNavigate } from 'react-router-dom'

import ReviewForm from '../shared/ReviewForm'

const ReviewCreate = ({ user, msgAlert }) => {
    const navigate = useNavigate()

    const defaultReview = {
        review: '',
    }

    const [review, setReview] = useState(defaultReview)

    const handleChange = (e) => {
        // to keep the values as users input info 
        // first spread the current pet
        // then comma and modify the key to the value you need
        // this was fine for the old way of building a pet
        // need new stuff to handle new data types number and boolean
        // setPet({...pet, [event.target.name]: event.target.value})
        setReview(prevReview => {
            const updatedName = e.target.name
            let updatedValue = e.target.value
            // this handles our number type
            if (e.target.type === 'number') {
                // this looks at the input type and changes from the default type of string to an actual number
                updatedValue = parseInt(e.target.value)
            }

            const updatedReview = { [updatedName]: updatedValue }

            return { ...prevReview, ...updatedReview }
        })
    }

    const handleCreateReview = (e) => {
        e.preventDefault()
        
        reviewCreate(review, user)
            .then(res => { navigate(`/reviews/${res.data.review._id}`)})
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Create Review',
                    variant: 'success'
                })
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Create Review Failure' + error,
                    variant: 'danger'
                })
            })
    }

    return (
        <ReviewForm
            review={ review }
            handleChange={ handleChange }
            heading="Create a new review (1-10)!"
            handleSubmit={ handleCreateReview }
        />
	)
}

export default ReviewCreate