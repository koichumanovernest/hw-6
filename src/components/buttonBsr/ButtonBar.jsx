import { useState } from "react";
import { Button } from "../UI/button/Button";
import css from "../UI/button/Button.module.css";
import css1 from "./ButtonBar.module.css"

export const ButtonBar = () => {

	const [resultText, setResultText] = useState(false);


	return (
		<div>
			
			<Button onClick={() => setResultText(!resultText)} className={css.button2}>start</Button>
			{resultText ? <div className={css1.spinner}></div> : null}
		</div>
	);
};
