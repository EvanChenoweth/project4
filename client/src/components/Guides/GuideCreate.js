import React, { useState } from 'react' 
import { guideCreate } from '../../api/guide'
import { useNavigate } from 'react-router-dom'

import GuideForm from '../shared/GuideForm'

const GuideCreate = ({ user, msgAlert }) => {
    const navigate = useNavigate()

    const defaultGuide = {
        title: '',
        game: '',
        topic: '',
        content: ''
    }

    const [guide, setGuide] = useState(defaultGuide)

    const handleChange = (e) => {
        // to keep the values as users input info 
        // first spread the current pet
        // then comma and modify the key to the value you need
        // this was fine for the old way of building a pet
        // need new stuff to handle new data types number and boolean
        // setPet({...pet, [event.target.name]: event.target.value})
        setGuide(prevGuide => {
            const updatedName = e.target.name
            let updatedValue = e.target.value
            // this handles our number type
            if (e.target.type === 'number') {
                // this looks at the input type and changes from the default type of string to an actual number
                updatedValue = parseInt(e.target.value)
            }

            const updatedGuide = { [updatedName]: updatedValue }

            return { ...prevGuide, ...updatedGuide }
        })
    }

    const handleCreateGuide = (e) => {
        e.preventDefault()
        
        guideCreate(guide, user)
            .then(res => { navigate(`/guides/${res.data.guide._id}`)})
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Create Guide',
                    variant: 'success'
                })
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Create Guide Failure' + error,
                    variant: 'danger'
                })
            })
    }

    return (
        <GuideForm
            guide={ guide }
            handleChange={ handleChange }
            heading="Create a new guide!"
            handleSubmit={ handleCreateGuide }
        />
	)
}

export default GuideCreate