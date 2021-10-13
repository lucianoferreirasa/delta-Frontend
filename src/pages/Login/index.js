import React from "react";
import logoImg from '../../assets/logoImg.png'
import './styles.css';


export default function Login(){
    return(
        
        <div className="login-container">
            <div className="content">
                <section>
                    <h1>Seja bem-vindo(a)</h1>
                    <img src={logoImg} alt="Logo estudante" />
                    <a href="/students" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Ir para alunos</a>
                </section>
            </div>
        </div>

        
      
    )
}