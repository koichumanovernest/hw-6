import { useState } from "react";
import { Button } from "../UI/button/Button";
import css from "../UI/button/Button.module.css";
import css1 from "./Counter.module.css";

export const Counter = () => {
	const [count, setCount] = useState(0);
	const numberCount = () => {
		setCount(count + 1);
	};
	const minusCount = () => {
		setCount(count - 1);
	};
	return (
		<div className={css1.Counter}>
			
			<Button className={css.button2} onClick={numberCount}>
				increment
			</Button>
			<h1>{count}</h1>
			<Button className={css.button2} onClick={minusCount}>
				dicrement
			</Button>
		</div>
	);
};
