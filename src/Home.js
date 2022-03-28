import { useState } from 'react'

const Home = () => {
	// const title = 'React Course'
	// const number = 8
	// const obj = { name: 'name', age: 8 }

	const [title, setTitle] = useState('React Course')

	const clickHandler = (txt, e) => {
		console.log(txt, e)
	}

	const changeState = () => {
		setTitle('Cool React Course')
	}

	return (
		<div className="home">
			<h1>{title}</h1>
			<button onClick={(e) => clickHandler('clicked', e)}>Click Event</button>
			<button onClick={() => changeState()}>Click Event</button>

			{/* <p>{number}</p>
			<p>{obj.name}</p>
			<p>{[1, 2, 3, 4, 5]}</p>
			<p>{Math.random()}</p> */}
		</div>
	);
}

export default Home;
