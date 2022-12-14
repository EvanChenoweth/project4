// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import PostCreate from './components/Posts/PostCreate'
import PostIndex from './components/Posts/PostIndex'
import PostShow from './components/Posts/PostShow'
import PostUpdate from './components/Posts/PostUpdate'
import MyProfile from './components/Profile/MyProfile'
import GuideCreate from './components/Guides/GuideCreate'
import GuideIndex from './components/Guides/GuideIndex'
import GuideShow from './components/Guides/GuideShow'
import GuideUpdate from './components/Guides/GuideUpdate'
import ReviewCreate from './components/Profile/ReviewCreate'

const App = () => {

  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  console.log('user in app', user)
  console.log('message alerts', msgAlerts)
  const clearUser = () => {
    console.log('clear user ran')
    setUser(null)
  }

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}

		return (
			<Fragment id='app'>
				<Header user={user} />
					<Routes>
						<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
						<Route path='/my-profile' element={<MyProfile msgAlert={msgAlert} user={user} setUser={setUser}  />} />
						<Route
							path='/sign-up'
							element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
						/>
						<Route
							path='/sign-in'
							element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
						/>
						<Route
						path='/sign-out'
						element={
						<RequireAuth user={user}>
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>
						}
						/>
						<Route
						path='/change-password'
						element={
						<RequireAuth user={user}>
							<ChangePassword msgAlert={msgAlert} user={user} />
						</RequireAuth>}
						/>
						<Route
							path='/create'
							element={
							<RequireAuth user={user}>
								<PostCreate msgAlert={msgAlert} user={user} />
							</RequireAuth>
							}
						/>
						<Route
							path='/posts'
							element={
							<RequireAuth user={user}>
								<PostIndex msgAlert={msgAlert} user={user} />
							</RequireAuth>
							}
						/>
						<Route
							path='/posts/:id'
							element={
							<RequireAuth user={user}>
								<PostShow msgAlert={msgAlert} user={user} />
							</RequireAuth>
							}
						/>
						<Route
							path='/posts/:id'
							element={
							<RequireAuth user={user}>
								<PostUpdate msgAlert={msgAlert} user={user} />
							</RequireAuth>
							}
						/>
						<Route
							path='/gcreate'
							element={
							<RequireAuth user={user}>
								<GuideCreate msgAlert={msgAlert} user={user} />
							</RequireAuth>
							}
						/>
						<Route
							path='/guides'
							element={
							<RequireAuth user={user}>
								<GuideIndex msgAlert={msgAlert} user={user} />
							</RequireAuth>
							}
						/>
						<Route
							path='/guides/:id'
							element={
							<RequireAuth user={user}>
								<GuideShow msgAlert={msgAlert} user={user} />
							</RequireAuth>
							}
						/>
						<Route
							path='/guides/:id'
							element={
							<RequireAuth user={user}>
								<GuideUpdate msgAlert={msgAlert} user={user} />
							</RequireAuth>
							}
						/>
						<Route
							path='/review'
							element={
							// <RequireAuth user={user}>
								<ReviewCreate msgAlert={msgAlert} user={user} />
							// </RequireAuth>
							}
						/>
					</Routes>
					{msgAlerts.map((msgAlert) => (
						<AutoDismissAlert
							key={msgAlert.id}
							heading={msgAlert.heading}
							variant={msgAlert.variant}
							message={msgAlert.message}
							id={msgAlert.id}
							deleteAlert={deleteAlert}
						/>
					))}
			</Fragment>
		)
}

export default App
