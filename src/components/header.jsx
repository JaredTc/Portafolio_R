export const Header = () => {
    return <div>
     {/* <header className="l-header">
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">JaredTc</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
      {/* <nav className="nav bd-grid navbar-expand-lg navbar-light ">
 
    <a className="navbar-brand" href="#">JaredTc</a>
   
    <div className="collapse nav__menu navbar-collapse" id="navbarSupportedContent">
      <ul className=" nav__list">
        <li className="nav-item">
        <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
        </li>
        <li className="nav-item">
        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
        </li>
        <li className="nav-item">
        <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
        </li>
  
        <li className="nav-item">
        <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
        </li>
      </ul>

    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

</nav> */}
    <header className="l-header">
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
            </nav>
        </header> 

   


    </div>
}