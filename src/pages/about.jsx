import JOAG from '../assets/img/Joag.png'

const AboutMe = () => {
    return ( <div>
        <section className="about section " id="about">
            <h2 className="section-title">
                About
            </h2>
            <div className="about__container bd-grid">
                <div className="about__img">
                    <img src={JOAG} alt="" />

                </div>
                <div>
                    <h2 className="about__subtitle">I'am Jared</h2>
                    <p className="about__text">
                        I'm 21 years old and i like the software development
                        i'm look to develop other skills in the world of the
                        technology, i am studying systems engineer 
                        sometimes desing applications as a practices to improve.
                    </p>
                </div>

            </div>
        </section>
    </div> );
}
 
export default AboutMe;