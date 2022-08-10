import { Advice } from "./components/Advice";
import { Footer } from "./components/Footer";
import { useRef } from "react";

import main from "./assets/css/main.module.css";

export const AdviceApp = () => {
	const onGetData = useRef(null)
	
	return (
		<>
			<div className={main.card}>
				<Advice onGetData={onGetData} className={main.Advice} />
				<button onClick={() => onGetData.current()} className={main.btn}></button>
			</div>
			<Footer />               
		</>
	);
};
