import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './styles.css';

function Fotos(){
    return (
        <>
            <Header />

            <div className="text">
                <h1>Fotos</h1>
            </div>

            <div className="actor-card-container">
                <div className="card-content">
                    <div className="cards banner1"></div>
                    <div className="cards banner2"></div>
                    <div className="cards banner3"></div>
                    <div className="cards banner4"></div>
                    <div className="cards banner5"></div>
                    <div className="cards banner6"></div>
        </div>
    </div>
            <Footer />
        </>
    )
}

export default Fotos;