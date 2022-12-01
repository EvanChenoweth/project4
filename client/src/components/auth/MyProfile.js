import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'
import { userUpdate } from '../../api/auth'

import ReviewModalForm from './UserModalForm'
import Button from 'react-bootstrap/Button'

const MyProfile = ({user,msgAlert, setUser}) => {
    const [editModalShow, setEditModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)

    const navigate = useNavigate()
    // first name update
    const [userName, setUserName] = useState(user)
    
    //toggle show, for now, later may be modals
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }
    const triggerRefresh= () => {setUpdated(prev => !prev)}

    const handleClose=() => {setEditModalShow(false)}

    const handleChange = (event) => {
        setUserName(prevUser => {
            const updatedName = event.target.name
            let updatedValue = event.target.value

            const updatedUser = { [updatedName]: updatedValue }

            return { ...prevUser, ...updatedUser }
        })
    }

    const handleUpdate = (event) => {
        event.preventDefault()
        
        userUpdate(userName)
            .then((res) => {
                console.log('this is user in update user', res.data.user)
                setUser(res.data.user)
            })
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.updatePetSuccess,
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: messages.updatePetFailure + error,
                    variant: 'danger'
                })
            })
        }

    if(!user){
        return(
            <div>Please Sign In</div>
        )
    }

    return (
        <div style={{ textAlign: 'center', width: '90vw', margin: 5, color: 'white'}}>
            <h3>
                {user.email}'s Profile  
            </h3>
            <div>
                <div className="btn-group-vertical">

                    {editModalShow &&<ReviewModalForm closeModal={setEditModalShow}
                    show = {editModalShow}
                    userName={userName}
        
                    handleUpdate={handleUpdate}
                    handleChange={handleChange}
        
                    navigate ={navigate}
                    />}
                    
                    <Button onClick={()=> 
                    {
                        setEditModalShow(true)
                    }}>Leave Review</Button>
                </div>
            </div>
        </div>
    )
}

export default MyProfile