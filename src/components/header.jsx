import '../assets/css/styles.css'
export const Header = () => {
    return <div>
       <header className="l-header">
    <nav className="navbar nav d-flex navbar-expand-lg navbar-light bg-light justify-content-end">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">JaredTech</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse nav__menu nv navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item nav__item">
        <a href="#home" className="nav__link active">Home</a>
        </li>
        <li className="nav-item nav__item">
        <a href="#about" className="nav__link">About</a>
        </li>
        <li className="nav-item nav__item">
        <a href="#skills" className="nav__link">Skills</a>
        </li>
        <li className="nav-item nav__item">
        <a href="#work" className="nav__link">Work</a>
        </li>      
        <li className="nav-item nav__item">
        <a href="#contact" className="nav__link">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/*    
            <nav className="nav bd-grid">
                <div>
                    <a href="#" className="nav__logo">JaredTC</a>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav> */}
        </header> 

   


    </div>
}