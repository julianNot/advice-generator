import { useEffect, useState } from "react";

import main from "../assets/css/main.module.css";
import divider from "../assets/icons/pattern-divider-desktop.svg";
import { AdviceLoading } from "./AdviceLoading";

export const Advice = ({ onGetData }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setdata] = useState("");
	const { id, advice } = data;

	const getData = async () => {
		setIsLoading(true);
		const resp = await fetch("https://api.adviceslip.com/advice");
		const data = await resp.json();
		setdata(data.slip);
		setIsLoading(false);
	};

	useEffect(() => {
		onGetData.current = getData;
		getData();
	}, []);

	return (
		<>
			{isLoading ? (
				<AdviceLoading/>
			) : (
				<div className={main.text}>
					<h2 className={main.title}>ADVICE # {id}</h2>
					<p className={main.body}>"{advice}"</p>
					<img
						className={main.divider}
						src={divider}
						alt="line separation"
					/>
				</div>
			)}
		</>
	);
};
