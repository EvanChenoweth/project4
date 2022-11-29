const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const centerStyle = {
		margin: '5vh auto',
		textAlign: 'center',
	}

	const centerStyleMarginTop = {
		marginTop: '20vh',
		textAlign: 'center',
	}

	return (
		<>
			<div style={centerStyleMarginTop}>
				<h3>the answer to your question...</h3>
				<h2>Who's Online?</h2>
			</div>

			<div style={centerStyle}>
				<h3><a href="/sign-up">Sign Up</a> or <a href="/sign-in">Sign In</a> to continue...</h3>
			</div>
		</>
	)
}

export default Home
