import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Children from "./components/Children";
import ColorBox from "./components/ColorBox";

function App() {
	let count = useSelector((state) => state.count);
	let dispatch = useDispatch();
	let [backgroundColor, setBackgroundColor] = useState("");

	const increaseNum = () => {
		dispatch({ type: "Increment" });
	};

	return (
		<div>
			<h1>Counter App</h1>
			<input
				type="text"
				onChange={(e) => setBackgroundColor(e.target.value)}
			></input>

			<h2>{count}</h2>
			<button onClick={() => increaseNum()}>Increment</button>
			<button
				onClick={() =>
					dispatch({
						type: "Decrement",
						payload: { num: 1, message: "fuck you" },
					})
				}
			>
				Decrement
			</button>
			<button onClick={() => dispatch({ type: "Reset" })}>Reset</button>

			{Array(count)
				.fill(null)
				.map((box) => {
					return <ColorBox backgroundColor={backgroundColor} />;
				})}
		</div>
	);
}

export default App;
