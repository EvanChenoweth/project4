const Home = (props, user) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const centerStyle = {
		margin: '5vh auto',
		textAlign: 'center',
		color: 'white'
	}

	const centerStylePaddingTop = {
		paddingTop: '20vh',
		textAlign: 'center',
		color: 'white'
	}

	const authenticatedOptions = (
		<div style={centerStylePaddingTop}>
			<h3>the answer to your question...</h3>
			<h1>Who's Online?</h1>
		</div>
	)

	const unauthenticatedOptions = (
		<div style={centerStyle}>
			<h4><a href="/sign-up">Sign Up</a> or <a href="/sign-in">Sign In</a> to continue...</h4>
		</div>
	)

	return (
		<>
			<div id="home">

				{user ? authenticatedOptions : unauthenticatedOptions}
			</div>
		</>
	)
}

export default Home
