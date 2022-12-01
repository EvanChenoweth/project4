const PostUpdate = ({ post, handleChange, handleUpdatePost}) => {
    return (
        <>
            <input
                type='text'
                value={post.game}
                name='game'
                onChange={handleChange}
            />
            <input
                type='text'
                value={post.mode}
                name='mode'
                onChange={handleChange}
            />
            <input
                type='number'
                value={post.players}
                name='players'
                onChange={handleChange}
            />
            <input
                type='text'
                value={post.info}
                name='info'
                onChange={handleChange}
            />
            <button onClick={handleUpdatePost}>Update Post</button>
        </>
    )
}

export default PostUpdate