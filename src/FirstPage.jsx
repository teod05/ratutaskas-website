function FirstPage(){
    const handleCall = () => {
        window.location.href = "tel:+37068830112";
    };

    return(
        <div id="home" className="first-page">
            <div className="first-page-text">
                <h1 className="padangu-servisas animate-heading">PADANGŲ SERVISAS 
                <span className="klaipeda"> KLAIPĖDOJE</span></h1>
                <p className="turbut animate-subtext">Turbūt geriausias padangų servisas Klaipėdoje – greitai, patikimai, be jokių rūpesčių! Jūsų automobilis – mūsų rūpestis.</p>
                <button className="skambinti animate-button" onClick={handleCall}>
                    <i className="fas fa-phone"></i> Skambinti
                </button>
            </div>
            <img className="landing-photo animate-image" src="./src/assets/IMG_2624.jpg" alt="a man holding a tire" />
        </div>
    )
}

export default FirstPage