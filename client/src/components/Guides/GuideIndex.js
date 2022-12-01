import React, { useEffect, useState } from 'react' 
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { guideIndex } from '../../api/guide'

const GuideIndex = ({ user, msgAlert }) => {

    const [allGuides, setAllGuides] = useState([])

    useEffect(() => {
        guideIndex(user)
        .then(res => {
            setAllGuides(res.data.guides)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Guides Failure' + error,
                variant: 'danger'
            })
        })
    }, [])


    const postCards = allGuides.map(guide => (
        <Card key={ guide.id } style={{ width: '90vw', margin: 5, color: 'white'}} bg="dark">
            <Card.Header>
                <Link to={ `/guides/${guide._id}` }>{ guide.title } by { user.email }</Link>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    Guide Title: {guide.title}
                    <br />
                    Guide Game: {guide.game}
                    <br />
                    Guide Topic: {guide.topic}
                    <br />
                    Content: {guide.content}
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

export default GuideIndex