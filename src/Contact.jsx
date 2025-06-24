function Contact() {
    const handleCall = () => {
        window.location.href = "tel:+37068830112";
    };

    const handleEmail = () => {
        window.location.href = "mailto:info@ratutaskas.lt";
    };

    const handleMap = () => {
        window.open("https://maps.google.com/?q=Jūrininkų pr. 2, Klaipėda", "_blank");
    };

    return(
        <div id="contact" className="contact-page">
            <h1 className="contact-head"><span className='susisiekite'>Susisiek</span> su mumis!</h1>
            <div className="after-contact-head">
                <div className="map-container">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8997.608016653116!2d21.1929857!3d55.6819983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e4dd1122a2816f%3A0x17873903ccccba25!2zUmF0xbMgVGHFoWthcw!5e0!3m2!1slt!2slt!4v1750411124690!5m2!1slt!2slt"
                        width="700"
                        height="645"
                        style={{ border: 0, borderRadius: "30px" }}
                        allowFullScreen=""
                        loading="lazy"
                        className="map-frame"
                    ></iframe>
                    <div className="map-overlay" onClick={handleMap}>
                        <button className="view-larger-map">
                            <i className="fas fa-expand-arrows-alt"></i>
                            Atidaryti žemėlapį
                        </button>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="contact-info-group">
                        <div className="contact-icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <h2>+370 688 30 112</h2>
                        <button className="contact-button" onClick={handleCall}>
                            <i className="fas fa-phone"></i>
                            Skambinti
                        </button>
                    </div>
                    <div className="contact-info-group">
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <h2>info@ratutaskas.lt</h2>
                        <button className="contact-button" onClick={handleEmail}>
                            <i className="fas fa-envelope"></i>
                            El. paštas
                        </button>
                    </div>
                    <div className="contact-info-group">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <h2>Jūrininkų pr. 2, Klaipėda,<br/>95264 Klaipėdos m. sav.</h2>
                        <button className="contact-button" onClick={handleMap}>
                            <i className="fas fa-map-marker-alt"></i>
                            Žemėlapis
                        </button>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default Contact