import main from '../assets/css/main.module.css'

export const AdviceLoading = () => {
	return <div className={main.spinner__container}>
        <div className={main.spinner}></div>
    </div>;
};
