import footer from "../assets/css/footer.module.css"

export const Footer = () => {
	return  (
        <div className={ footer.footer }> <span>Challenge by</span>
            <a className={ footer.a } href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>. 
            <span> Coded by </span> <a className={ footer.a } href="https://www.linkedin.com/in/julian-ardila404/" target="_blank"> Julian Ardila</a>.
        </div>
    )
};
