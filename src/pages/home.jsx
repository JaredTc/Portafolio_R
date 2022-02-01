import '../assets/css/styles.css'
import Perfil from '../assets/img/Perfil.png'

export const HomePague = () => {
    return <div >
           <section className="home bd-grid" id="home">
                <div className="home__data">
                <h1 className="home__title">Hi,<br />I'am <span className="home__title-color">Jared</span><br /></h1>

                    <a href="#contact" className="button">Contact</a>
                </div>

                <div className="home__social">
                <a  className="home__social-icon"><i className='fab fa-linkedin'></i></a>
                <a  className="home__social-icon"><i className="fab fa-instagram"></i> </a>
                <a className="home__social-icon"><i className='fab fa-github' ></i></a>
            </div>
                <div className="home__img">    
                <img src={Perfil}    alt="" />
                </div>
            </section>
    </div>

}