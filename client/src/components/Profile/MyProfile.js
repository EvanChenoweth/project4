import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'
// import { userUpdate } from '../../api/auth'
// import ReviewModalForm from '../auth/UserModalForm'
import Button from 'react-bootstrap/Button'
import ReviewForm from '../shared/ReviewForm'

const MyProfile = ({user,msgAlert, setUser}) => {

    const navigate = useNavigate()

    // const handleChange = (event) => {
    //     setUserName(prevUser => {
    //         const updatedName = event.target.name
    //         let updatedValue = event.target.value

    //         const updatedUser = { [updatedName]: updatedValue }

    //         return { ...prevUser, ...updatedUser }
    //     })
    // }

    // const handleUpdate = (event) => {
    //     event.preventDefault()
        
    //     userUpdate(userName)
    //         .then((res) => {
    //             console.log('this is user in update user', res.data.user)
    //             setUser(res.data.user)
    //         })
    //         .then(() => handleClose())
    //         .then(() => {
    //             msgAlert({
    //                 heading: 'Success',
    //                 message: messages.updatePetSuccess,
    //                 variant: 'success'
    //             })
    //         })
    //         .then(() => triggerRefresh())
    //         .catch((error) => {
    //             msgAlert({
    //                 heading: 'Failure',
    //                 message: messages.updatePetFailure + error,
    //                 variant: 'danger'
    //             })
    //         })
    //     }

    const reviews = ['']

    const handleSubmit = (review) => {
        reviews.push(review)
    }

    const reviewCards = (
            <h6>
                <ReviewForm></ReviewForm>
            </h6>
        )

    if(!user){
        return(
            <div>Please Sign In</div>
        )
    }

    return (
        <div style={{ textAlign: 'center', width: '90vw', margin: 'auto', color: 'white', backgroundColor: 'rgb(34, 37, 41)', marginTop: '5px'}}>
            <br />
            <h3>
                {user.email}'s Profile

                <br />
                <br />
                Community Score: 10/10
                <br />
                {reviewCards}
                <br />
            </h3>
        </div>
    )
}

export default MyProfile