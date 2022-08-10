import { useEffect, useState } from 'react';

import main from '../assets/css/main.module.css'
import divider from '../assets/icons/pattern-divider-desktop.svg'

export const Advice = ({ onGetData }) => {
	const [data, setdata] = useState('')
	const { id, advice } = data

	const getData = async () => {
		const resp = await fetch('https://api.adviceslip.com/advice')
		const data = await resp.json()
		setdata(data.slip)
	}

	useEffect(() => {
		onGetData.current = getData
		getData()
	}, [])
	
	return (
		<div className={ main.text }>
			<h2 className={ main.title }>ADVICE # { id }</h2>
			<p className={ main.body }>"{ advice }"</p>
			<img className={ main.divider } src={ divider } alt="line separation" />
		</div>
	);
};
