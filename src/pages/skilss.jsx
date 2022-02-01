import Perfil from '../assets/img/Perfil.png'
const SkillScreen = () => {
    return ( 
        <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>

        <div className="skills__container bd-grid">          
            <div>
                {/* <h2 className="skills__subtitle">Frontend Skills</h2> */}
                <div className="skills__data">
                    <div class="skills__names">
                        <i className='fab fa-html5 skills__icon'></i>
                        <span className="skills__name">HTML5</span>
                    </div>
                    <div className="skills__bar skills__html">

                    </div>
                    <div>
                        <span className="skills__percentage"></span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='fab fa-css3 skills__icon'></i>
                        <span className="skills__name">CSS3</span>
                    </div>
                    <div className="skills__bar skills__css">
                        
                    </div>
                    <div>
                        <span className="skills__percentage"></span>
                    </div>
                </div>
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='fab fa-react skills__icon'></i>
                        <span className="skills__name">React</span>
                    </div>
                    <div className="skills__bar skills__ux">
                        
                    </div>
                    <div>
                        <span className="skills__percentage"></span>
                    </div>
                </div>
                <h2 className="skills__subtitle">Design Skills</h2>
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='fab fa-figma skills__icon'></i>
                        <span className="skills__name">Figma</span>
                    </div>
                    <div className="skills__bar skills__ux">
                        
                    </div>
                    <div>
                        <span className="skills__percentage"></span>
                    </div>
                </div>
            </div>
            
            <div> 
                <div>
                {/* <h2 className="skills__subtitle">Backend Skills</h2> */}
               
            <div className="skills__data">
                
                    <div className="skills__names">
                        <i className='fab fa-java skills__icon'></i>
                        <span className="skills__name">JAVA</span>
                    </div>
                    <div className="skills__bar skills__java">
                        
                    </div>
                    <div>
                        <span className="skills__percentage"></span>
                    </div>
                </div>   
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='fab fa-js-square skills__icon' ></i>
                        <span className="skills__name">JAVASCRIPT</span>
                    </div>
                    <div className="skills__bar skills__js">
                        
                    </div>
                    <div>
                        <span className="skills__percentage"></span>
                    </div>
                </div>     
                <div className="skills__data">
                    <div className="skills__names">
                        <i className='fab fa-php skills__icon' ></i>
                        <span className="skills__name">PHP</span>
                    </div>
                    <div className="skills__bar skills__js">
                        
                    </div>
                    <div>
                        <span className="skills__percentage"></span>
                    </div>
                </div>               
            </div>
            <h2 className="skills__subtitle">Mobile Skills</h2>
            <div className="skills__data">
                    <div className="skills__names">
                        <i className='fab fa- skills__icon'></i>
                        <span className="skills__name">FLUTTER</span>
                    </div>
                    <div className="skills__bar skills__ux">
                        
                    </div>
                    <div>
                        <span className="skills__percentage"></span>
                    </div>
                </div>             
             
            </div>
            
        </div>
    </section>
    );
}
 
export default SkillScreen;