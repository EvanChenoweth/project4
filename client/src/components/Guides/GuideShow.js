import React, { useEffect, useState } from "react"
import { Card } from 'react-bootstrap'
import { Form, Button, Container } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { guideShow, guideUpdate, guideDelete } from "../../api/guide"
import GuideUpdate from "./GuideUpdate"

const GuideShow = ({ user, msgAlert}) => {

    const [guide, setGuide] = useState({})
    const [quantity, setQuantity] = useState({})

    const { id } = useParams()
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    // const [isDeleteShown, setIsDeleteShown] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        guideShow(user, id)
        .then(res => {
            setGuide(res.data.guide)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Show Guide Failure' + error,
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
        setGuide({...guide, [event.target.name]: event.target.value})
    }

    const handleUpdateGuide = () => {
        guideUpdate(guide, user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Update Guide',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Update Guide Failure' + error,
                variant: 'danger'
            })
        })
    }

    const handleDeleteGuide = () => {
        guideDelete(user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Delete Guide Success',
                variant: 'success'
            })
            navigate('/guides')
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Delete Guide Failure' + error,
                variant: 'danger'
            })
        })
    }

    const postCard = 
        <Card style={{ width: '90vw', margin: 5, color: 'white'}} className="container-md" bg="dark">
                <Card.Header className="text-primary">Title: {guide.title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p>Game: {guide.game}</p>
                        <p>Topic: {guide.topic}</p>
                        <p>Content: {guide.content}</p>
                        <Button onClick={toggleShowUpdate}>Update</Button>
                        <Button onClick={handleDeleteGuide}>Delete</Button>
                    </Card.Text>
                </Card.Body>
            </Card>

    return(
        <div className="container-md">
            {postCard}
            {isUpdateShown && (
                <GuideUpdate guide={guide}
                    handleChange={handleChange}
                    handleUpdateGuide={handleUpdateGuide}
                />
            )}
        </div>
    )
}

export default GuideShow