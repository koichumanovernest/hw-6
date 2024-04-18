import React, { useState } from "react";
import Button from "../UI/button/Button.module.css"; // Assuming Button is a CSS module
import css from "./Item.module.css"

export const Item = () => {
	const [showHome, setShowHome] = useState(false);
	const [showAbout, setShowAbout] = useState(false);
	const [showContacts, setShowContacts] = useState(false);
	const [showContacts4, setShowContacts4] = useState(false);
	const [showContacts5, setShowContacts5] = useState(false);

	return (
		<div>
			<button
				onClick={() => {
					setShowHome(true);
					setShowAbout(false);
					setShowContacts(false);
					setShowContacts4(false);
					setShowContacts5(false);
				}}
				className={Button.button3}>
				Item1
			</button>
			<button
				onClick={() => {
					setShowHome(false);
					setShowAbout(true);
					setShowContacts(false);
					setShowContacts4(false);
					setShowContacts5(false);
				}}
				className={Button.button3}>
				Item2
			</button>
			<button
				onClick={() => {
					setShowHome(false);
					setShowAbout(false);
					setShowContacts(true);
					setShowContacts4(false);
					setShowContacts5(false);
				}}
				className={Button.button3}>
				Item3
			</button>
			<button
				onClick={() => {
					setShowHome(false);
					setShowAbout(false);
					setShowContacts(false);
					setShowContacts4(true);
					setShowContacts5(false);
				}}
				className={Button.button3}>
				Item4
			</button>
			<button
				onClick={() => {
					setShowHome(false);
					setShowAbout(false);
					setShowContacts(false);
					setShowContacts4(false);
					setShowContacts5(true);
				}}
				className={Button.button3}>
				Item5
			</button>
      <p className={css.content}>
      You selected:
			<button className={css.buttons}>Item
				
				{" "}
				{showAbout && <p>2</p>}
				{showContacts && <p>3</p>}
				{showContacts4 && <p>4</p>}
				{showHome && <p>1</p>}
				{showContacts5 && <p>5</p>}
			</button>
      </p>
		</div>
	);
};
