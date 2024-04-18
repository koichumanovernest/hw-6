import { useState } from "react";
import { Button } from "../UI/button/Button";
import css from "../UI/button/Button.module.css";

export const Open = () => {

	const [resultText, setResultText] = useState(false);


	return (
		<div>
			<Button onClick={() => setResultText(!resultText)} className={css.button2}>{resultText ? "open" : "close"}</Button>
			{resultText ? <h1>Upps!</h1> : null}
		</div>
	);
};
