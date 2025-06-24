import { useEffect, useRef } from 'react'

function Services() {
    return (
        <div id="services" className="services-section">
            <div className="services-container">
                <div className="services-header">
                    <h2>Mūsų <span>Paslaugos</span></h2>
                    <p>Profesionalios padangų priežiūros paslaugos Klaipėdoje</p>
                </div>
                
                <div className="services-layout">
                    {/* Main Featured Service */}
                    <div className="service-main">
                        <div className="service-image">
                            <img src="./src/assets/ChatGPT Image Jun 24, 2025, 08_07_56 PM.png" alt="Padangų montavimas" />
                        </div>
                        <div className="service-content">
                            <h3>Padangų Montavimas</h3>
                            <p>Profesionalus padangų montavimas ir balansavimas. Užtikriname maksimalų stabilumą kelyje.</p>
                        </div>
                    </div>

                    {/* second service */}
                    <div className="service-main">
                        <div className="service-image">
                            <img src="./src/assets/ChatGPT Image Jun 18, 2025, 01_42_07 PM.png" alt="Padangų montavimas" />
                        </div>
                        <div className="service-content">
                            <h3>Padangų Remontas</h3>
                            <p>Greitas ir kokybiškas padangų taisymas. Užtikriname jūsų saugumą kelyje.</p>
                        </div>
                    </div>

                    {/* third service */}
                    <div className="service-main">
                        <div className="service-image">
                            <img src="./src/assets/IMG_2626.JPG" alt="Padangų montavimas" />
                        </div>
                        <div className="service-content">
                            <h3>Padangų Saugojimas</h3>
                            <p>Saugus padangų saugojimas mūsų sandėlyje. Apsauga nuo žalos ir ilgesnis padangų tarnavimo laikas.
                            </p>
                        </div>
                    </div>

                    


            

                </div>
            </div>
        </div>
    );
}

export default Services;