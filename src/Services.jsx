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
        </div>
    )
}

export default Services