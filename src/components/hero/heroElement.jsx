export default function HeroElement() {
    return (
        <div className="hero_wrapper">
            <div className="hero_container">
                <div className="hero_title">
                    <p>{"Norie's"}</p>
                </div>
                <div className="party_trays">
                    {/* <img src="/images/party_trays1.png"></img>
                    <img src="/images/party_trays2.png"></img> */}
                </div>
                <img className="hero_image" src="/images/hero.jpg"></img>
            </div>
        </div>
    );
}