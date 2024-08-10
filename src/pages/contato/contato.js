import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './styles.css';

function Contato(){
    return (
        <>
            <Header />
                <span className="span">Para entrar em contato conosco, preencha as informações abaixo <br></br> e deixe sua mensagem! Responderemos o mais breve possível!</span>

            <div className="formularios">
                <form action="/contato">

                    <div className="emailp">
                        <label for="email">Email</label>
                    </div>
                    <input className="inputstyle"  id="email" type="email" name="email" placeholder="Insira seu email"/>
            
                    <div className="namep">
                        <label for="nome">Nome</label>
                    </div>
                    <input className="inputstyle" id="text" type="text" name="nome" placeholder="Insira seu nome"/>

                    <label for="mensagem">Mensagem</label>
                    <textarea className="inputstyle" name="mensagem" id="mensagem" rows="15" placeholder="Digite sua mensagem"></textarea>
            
                        <button className="button1">Enviar</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Contato;