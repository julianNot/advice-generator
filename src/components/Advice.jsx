import main from '../assets/css/main.module.css'
import divider from '../assets/icons/pattern-divider-desktop.svg'

export const Advice = () => {
	const number = 117
	const advice = "It is easy to sit up and take notice, what's difficult is getting up and taking action"

	return (
		<div className={ main.text }>
			<h2 className={ main.title }>ADVICE # { number }</h2>
			<p className={ main.body }>" { advice } "</p>
			<img className={ main.divider } src={ divider } alt="line separation" />
		</div>
	);
};
