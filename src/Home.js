const Home = () => {
	const title = 'React Course'
	const number = 8
	const obj = { name: 'name', age: 8 }

	return (
		<div className="home">
			<h1>{title}</h1>
			<p>{number}</p>
			<p>{obj.name}</p>
			<p>{[1, 2, 3, 4, 5]}</p>
			<p>{Math.random()}</p>
		</div>
	);
}

export default Home;
