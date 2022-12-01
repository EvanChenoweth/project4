const GuideUpdate = ({ guide, handleChange, handleUpdateGuide}) => {
    return (
        <>
            <input
                type='text'
                value={guide.title}
                name='title'
                onChange={handleChange}
            />
            <input
                type='text'
                value={guide.game}
                name='game'
                onChange={handleChange}
            />
            <input
                type='text'
                value={guide.topic}
                name='topic'
                onChange={handleChange}
            />
            <input
                type='text'
                value={guide.content}
                name='content'
                onChange={handleChange}
            />
            <button onClick={handleUpdateGuide}>Update Guide</button>
        </>
    )
}

export default GuideUpdate