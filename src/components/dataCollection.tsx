import React, { useState, useEffect } from "react";
import styled, { AnyStyledComponent } from "styled-components";
import { firestore } from "../utils/firebase";

const Overview: AnyStyledComponent = styled.div`
	color: red;
`;

export default () => {
	const db = firestore.collection("test");
	const dbTest = firestore.collection("test");

	const meow: any = [];

	const [name, setName] = useState("");
	const [score, setScore] = useState(0);
	const [data, setData] = useState();

	function updateName(e: any) {
		setName(e.target.value);
	}
	function updateScore(e: any) {
		setScore(e.target.value);
	}

	function firebaseData(e: any) {
		e.preventDefault();
		db.add({
			name: name,
			score: score,
		});
		setScore(0);
	}

	firestore
		.collection("test")
		.get()
		.then((querySnapshot) => {
			const data2 = querySnapshot.docs.map((doc) => doc.data());
			for (let i = 0; i < data2.length; i++) {
				meow.push(data2[i]);
			}
		});

	console.log("this is meow", meow);
	console.log(meow[2]);

	return (
		<div>
			<Overview>
				<form onSubmit={firebaseData}>
					<input
						type="text"
						placeholder="Enter name"
						name="name"
						onChange={updateName}
						value={name}
					/>
					<input
						type="number"
						placeholder="Enter score"
						name="score"
						onChange={updateScore}
						value={score}
					/>
					<button type="submit">Submit</button>
				</form>

				<p>{meow[0]}</p>
			</Overview>
		</div>
	);
};
