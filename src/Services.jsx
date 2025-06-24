function Services(){
    return(
        <div id="services" className="viewport">
            <h1 className="services-title">Mūsų <span>Paslaugos</span></h1>
            <div className="services">
                <div className="service-box">
                    <img 
                        className="service-photo" 
                        src="./src/assets/ChatGPT Image Jun 18, 2025, 01_42_07 PM.png"
                        alt="Padangų remontas"
                    />
                    <h2 className="service-name">Padangų Remontas</h2>
                    <p className="text-box">
                        Greitas ir kokybiškas padangų taisymas. Užtikriname jūsų saugumą kelyje.
                    </p>
                </div>
                <div className="service-box">
                    <img 
                        className="service-photo" 
                        src="./src/assets/ChatGPT Image Jun 18, 2025, 01_44_39 PM.png"
                        alt="Padangų montavimas"
                    />
                    <h2 className="service-name">Padangų Montavimas</h2>
                    <p className="text-box">
                        Profesionalus padangų montavimas ir balansavimas. Užtikriname maksimalų stabilumą kelyje.
                    </p>
                </div>
                <div className="service-box">
                    <img 
                        className="service-photo" 
                        src="./src/assets/IMG_2626.JPG"
                        alt="Padangų saugojimas"
                    />
                    <h2 className="service-name">Padangų Saugojimas</h2>
                    <p className="text-box">
                        Saugus padangų saugojimas mūsų sandėlyje. Apsauga nuo žalos ir ilgesnis padangų tarnavimo laikas.
                    </p>
                </div>
            </div>
            <div className="wave-divider">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <path fill="#f8f8f8" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                </svg>
            </div>
        </div>
    )
}

export default Services