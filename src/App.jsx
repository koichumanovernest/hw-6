import { ChekBox } from "./components/chekBox/ChekBox";
import { Counter } from "./components/counter/Counter";
import { Onclose } from "./components/onclose/Onclose";
import { Open } from "./components/open/Open";
import { Home } from "./components/home/Home";
import { ButtonBar } from "./components/buttonBsr/ButtonBar";
import { Item } from "./components/item/Item";
import { Completed } from "./components/completed/Completed";

const App = () => {
	return (
		<div className="conteiner">
			<div>
				<Onclose />
				<Counter />
				<ChekBox />
				<Open />
				<ButtonBar />
				<Home />
				<Item />
				<Completed />
			</div>
		</div>
	);
};

export default App;
