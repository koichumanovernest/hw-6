import React, { useState } from "react";
import Button from "../UI/button/Button.module.css";

export const Completed = () => {
	const [showHome, setShowHome] = useState(false);
	const [showAbout, setShowAbout] = useState(false);
	const [showContacts, setShowContacts] = useState(false);

	return (
		<div>
			<button
				onClick={() => {
					setShowHome(true);
					setShowAbout(false);
					setShowContacts(false);
				}}
				className={Button.button2}>
				All
			</button>
			<button
				onClick={() => {
					setShowHome(false);
					setShowAbout(true);
					setShowContacts(false);
				}}
				className={Button.button2}>
				Completed
			</button>
			<button
				onClick={() => {
					setShowHome(false);
					setShowAbout(false);
					setShowContacts(true);
				}}
				className={Button.button2}>
				Uncompleted
			</button>
			{showHome && (
				<div>
					<p>Task 1 NOT COMPLETED </p>
					<p>Task 2 COMPLETED </p>
					<p>Task 3 NOT COMPLETED</p>
					<p>Task 4 COMPLETED </p>
				</div>
			)}
			{showAbout && (
				<div>
					<p>Task 2 COMPLETED </p>
					<p>Task 4 COMPLETED </p>
				</div>
			)}
			{showContacts && (
				<div>
					<p>Task 1 NOT COMPLETED </p>
					<p>Task 3 NOT COMPLETED</p>
				</div>
			)}
		</div>
	);
};
