const Home = (props, user) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	const centerStyle = {
		margin: '5vh auto',
		textAlign: 'center',
		color: 'white'
	}

	const centerStylePaddingTop = {
		paddingTop: '10vh',
		textAlign: 'center',
		color: 'white'
	}

	let options = (
		<div style={centerStylePaddingTop}>
			<h3>the answer to your question...</h3>
			<h1>Who's Online?</h1>
		</div>
	)

	if (!user) {
		options = (
			<>
				<div style={centerStylePaddingTop}>
					<h3>the answer to your question...</h3>
					<h1>Who's Online?</h1>
				</div>
				<div style={centerStyle}>
					<h4><a href="/sign-up">Sign Up</a> or <a href="/sign-in">Sign In</a> to continue...</h4>
				</div>
			</>
		)
	}

	const boxContainer = {
		marginTop: '5vh',
		width: '100vw',
		height: '50vw'
	}

	const box = {
		margin: '0 auto',
		width: '90vw',
		height: '25vw',
		backgroundColor: 'rgb(34, 37, 41)'
	}
	
	return (
		<>
			<div id="home">
				{options}
				{/* <div className="box-container" style={boxContainer}>
					<div className="box" style={box}>
						<a href="/posts">Browse All Posts</a>
					</div>
					<div className="box" style={box}>
						<button href="/create">Create A Post</button>
					</div>
				</div> */}
			</div>
		</>
	)
}

export default Home
