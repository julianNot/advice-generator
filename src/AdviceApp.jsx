import { Advice } from "./components/Advice";
import main from './assets/css/main.module.css';

export const AdviceApp = () => {
	return (
        <section /* className={ main.container } */>
            <div className={ main.card }>
                <Advice className={ main.Advice} />
                <button>Random i</button>
            </div>
        </section>
    )
};
