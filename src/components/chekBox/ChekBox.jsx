import { useState } from "react";
import css from "./Checkbox.module.css";

export const ChekBox = () => {
	const [chek, setChek] = useState(false);
	console.log(setChek);

	return (
		<div >
			<input type="checkbox" onClick={() => setChek(!chek)} />
			<div
				className={
					chek ? `${css.nooActive} ${css.active}` : `${css.nooActive}`
				}></div>
		</div>
	);
};
