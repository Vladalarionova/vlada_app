import React, {useState} from "react";


export default function App() {

	const [likes, setLikes] = useState(0)
	const [values, setValues] = useState('Text in Input')

	function Increment() {
		setLikes(likes + 1)
	}

	function Decrement() {
		setLikes(likes - 1)
	}

	return (
		<div className="App">
			<h1>{values}</h1>
			<h1>{likes}</h1>
			<button onClick={Increment}>Increment</button>
			<button onClick={Decrement}>Decrement</button>
		</div>
	)
}