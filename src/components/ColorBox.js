import React, { useState } from "react";

export default function ColorBox(props) {
	let [hugo, setHugo] = useState("");

	if (hugo) {
		return (
			<div
				style={{
					width: "150px",
					height: "150px",
					backgroundColor: `${hugo}`,
					margin: "10px",
					border: "1px black solid",
				}}
			>
				Each Box
				<input onChange={(e) => setHugo(e.target.value)}></input>
			</div>
		);
	}

	return (
		<div>
			<div
				style={{
					width: "150px",
					height: "150px",
					backgroundColor: `${props.backgroundColor}`,
					margin: "10px",
					border: "1px black solid",
				}}
			>
				Each Box
				<input onChange={(e) => setHugo(e.target.value)}></input>
			</div>
		</div>
	);
}
