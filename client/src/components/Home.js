const Home = (props) => {
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

	return (
		<>
			<div id="home">
				<div style={centerStylePaddingTop}>
					<h3>the answer to your question...</h3>
					<h1>Who's Online?</h1>
				</div>

				<div style={centerStyle}>
					<h4><a href="/sign-up">Sign Up</a> or <a href="/sign-in">Sign In</a> to continue...</h4>
				</div>
			</div>
		</>
	)
}

export default Home
