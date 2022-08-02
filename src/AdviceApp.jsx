import { Advice } from "./components/Advice";
import main from "./assets/css/main.module.css";

export const AdviceApp = () => {
	return (
		<div className={ main.card }>
			<Advice className={ main.Advice } />
			<button className={ main.btn }></button>
		</div>
	);
};
