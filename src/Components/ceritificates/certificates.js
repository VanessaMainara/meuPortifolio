import './certificates.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import techja from "./assets/techja.png";
import android from "./assets/android.png";
import euprogramo from "./assets/euprogramo.png";
import logica from "./assets/logica.png";
import lgpd from "./assets/lgpd.png";
import elastech from "./assets/elastech.png";
import descomplica from "./assets/descomplica.png";
import mariaSumit from "./assets/mariaSumit.png";
import futuroTrabalho from "./assets/futuroTrabalho.png";
import elasNaTech from "./assets/elasNaTech.png";
import seminario from "./assets/seminario.png";
import suporte from "./assets/suporte.png";
import fundamentos from "./assets/fundamentos.png";
import estruturaRedes from "./assets/estruturaRedes.png";
import sistemasOperacionais from "./assets/sistemasOperacionais.png";
import admSistemas from "./assets/admSistemas.png";
import segurança from "./assets/segurança.png";


import bussines from "./assets/bussines.png";
import innovationCamp from "./assets/innovationCamp.png";
import cc50 from "./assets/cc50.png";
import comunicacao from "./assets/comunicacao.png";
import historiasSucesso from "./assets/historiasSucesso.png";
import dicasCurriculo from "./assets/dicasCurriculo.png";
import inteligenciaEmocional from "./assets/inteligenciaEmocional.png";


export default function Certificates() {
    var settings = {
        speed: 500,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2200,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
        ]
    };

    return (
        <section class="page-section" id="certificates">
            <h3 class="title-page">Certificados</h3>
            <div class="container-owl-certificates">
            <Slider {...settings}>
                <div class="item">
                    <div class="img-item">
                        <img src={techja} alt="Certificado Suporte em TI 2021"></img>
                    </div>
                    <h3><span>Certificado Suporte em TI 2021</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={android} alt="Certificado Anfroid"></img>
                    </div>
                    <h3><span>Certificado APP Android</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={euprogramo} alt="Certificado Eu Programo"></img>
                    </div>
                    <h3><span>Certificado Eu Programo</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={logica} alt="Certificado Lógica de Programação"></img>
                    </div>
                    <h3><span>Certificado Lógica Programação</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={lgpd} alt="Certificado LGPD"></img>
                    </div>
                    <h3><span>Certificado LGPD</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={elastech} alt="Certificado ElasTech"></img>
                    </div>
                    <h3><span>Certificado ElasNaTech</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={descomplica} alt="Inteligência Emocional"></img>
                    </div>
                    <h3><span>Inteligência Emocional e Produtividade</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={mariaSumit} alt="PrograMaria Summit"></img>
                    </div>
                    <h3><span>PrograMaria Summit</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={futuroTrabalho} alt="O Futuro do Trabalho e JA Startap"></img>
                    </div>
                    <h3><span>O Futuro do Trabalho e JA Startap</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={elasNaTech} alt="ElasNaTech"></img>
                    </div>
                    <h3><span>ElasNaTech JA</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={seminario} alt="Seminário"></img>
                    </div>
                    <h3><span>Seminário</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={suporte} alt="Suporte em TI"></img>
                    </div>
                    <h3><span>Suporte em TI do Google</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={fundamentos} alt="Fundamentos do Suporte Tecnico"></img>
                    </div>
                    <h3><span>Fundamentos do Suporte Tecnico</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={estruturaRedes} alt="Estrutura e Funcionamento das Redes"></img>
                    </div>
                    <h3><span>Estrutura e Funcionamento das Redes</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={sistemasOperacionais} alt="Sistemas Operacionais - Usuário Avançado"></img>
                    </div>
                    <h3><span>Sistemas Operacionais - Usuário Avançado</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={admSistemas} alt="Administração de Sistemas"></img>
                    </div>
                    <h3><span>Administração de Sistemas</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={segurança} alt="Segurança de TI"></img>
                    </div>
                    <h3><span>Segurança de TI</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={bussines} alt="Bussines Agility - One"></img>
                    </div>
                    <h3><span>Bussines Agility - One</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={innovationCamp} alt="Innovatio Camp"></img>
                    </div>
                    <h3><span>Innovation Camp</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={cc50} alt="Curso de Ciência da Computação de Harvard"></img>
                    </div>
                    <h3><span>Curso de Ciência da Computação de Harvard</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={comunicacao} alt="Comunicação e Oratória"></img>
                    </div>
                    <h3><span>Comunicação e Oratória</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={historiasSucesso} alt="Vamos Falar de Histórias de Sucesso"></img>
                    </div>
                    <h3><span>Vamos Falar de Histórias de Sucesso</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={dicasCurriculo} alt="Vamos Falar de Dicas Currículo e Entrevista de Emprego"></img>
                    </div>
                    <h3><span>Vamos Falar de Dicas Currículo e Entrevista de Emprego</span></h3>
                </div>
                <div class="item">
                    <div class="img-item">
                        <img src={inteligenciaEmocional} alt="Vamos Falar de Inteligência Emocional"></img>
                    </div>
                    <h3><span>Vamos Falar de Inteligência Emocional</span></h3>
                </div>

            </Slider>
            </div>
        </section>
    );
}