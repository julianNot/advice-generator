import footer from "../assets/css/footer.module.css"

export const Footer = () => {
	return  (
        <div className={ footer.footer }> Challenge by
            <a className={ footer.a } href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>. 
            Coded by <a className={ footer.a } href="https://www.linkedin.com/in/julian-ardila404/" target="_blank"> Julian Ardila</a>.
        </div>
    )
};
