import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './styles.css';




function Comentarios(){
    return (
        <>
            <Header />
            <div className="text">
                <h1>Comentários</h1>
            </div>

    <div className="cards-comments">
        <div className="contents">
            <h2>Yagami Light</h2>
            <div className="icon pics-1"></div>
            <p className="comment">"Adoro assistir criminosos sendo colocados em seus devidos lugares."</p>

            <h2>Eren Yeager</h2>
            <div className="icon pics-2"></div>
            <p className="comment1">"Achei o Batman bonzinho demais..."</p>

            <h2>Gon Freecss</h2>
            <div className="icon pics-3"></div>
            <p className="comment">"Adorei o filme, vou tentar trazer meu pai pra assistir também."</p>

            <h2>Uzumaki Pain</h2>
            <div className="icon pics-4"></div>
            <p className="comment">"A dor que esse filme me proporcionou foi uma das coisas mais belas que já senti."</p>

            <h2>Gojou Satoru</h2>
            <div className="icon pics-5"></div>
            <p className="comment">"Tenho quase certeza que eu sou mais forte que esse cara aí."</p>

            <h2>Kamado Tanjiro</h2>
            <div className="icon pics-6"></div>
            <p className="comment">"Quando eu chegar em casa, vou trazer minha família inteira pra assistir."</p>
        </div>
    </div>
            <Footer />
        </>
    )
}

export default Comentarios;