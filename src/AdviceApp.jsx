import { Advice } from "./components/Advice";
import { Footer } from "./components/Footer";
import main from "./assets/css/main.module.css";
import { useEffect } from "react";


export const AdviceApp = ( onGetData ) => {
	useEffect(() => {

	}, [])
	

	const clickRandom = () => {
		const onRandomData = () => {
			onGetData()
		}
	}

	return (
		<>
			<div className={main.card}>
				<Advice onGetData={ onRandomData } className={main.Advice} />
				<button onClick={ clickRandom } className={main.btn}></button>
			</div>
			<Footer />               
		</>
	);
};
