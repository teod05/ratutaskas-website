function Navbar(){
    return(
        <nav className="navbar">
            <div>
                <img className="logo" src="./src/assets/Ratų-taškas_logo-1.png"/>
            </div>
            <ul className="nav-links">
                <li><a href="#">Pagrindinis</a></li>
                <li><a href="#">Paslaugos</a></li>
                <li><a href="#">Apie mus</a></li>
                <li><a href="#">Kontaktai</a></li>
            </ul>
        </nav>
    )
}

export default Navbar