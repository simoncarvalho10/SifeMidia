import { FaSave } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiFacebookFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im"; 
import { GrInstagram } from "react-icons/gr"; 
import { RiWhatsappLine } from "react-icons/ri"; 
import './App.css';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="head">
        <div id="logo">
          <img id="logotop" src="../img/logo_sife.svg" alt="logo" />
        </div>
        <div id="menu">
          <div className="menuMov" id=""><TfiMenuAlt size={40} /></div>
          <div className="menu" id="btnHome">Home</div>
          <div className="menu" id="quem_somos">Quem Somos</div>
          <div className="menu" id="portifolio">Portifólio</div>
          <div className="menu" id="fale_conosco">Fale Conosco</div>
        </div>
      </div>
      <div id="banner"></div>
      <div id="budget">
        <div id="bnrimg">
          <div id="setimg"></div>
        </div>
        <div id="bnrtexttd">
          <div id="bnrtext">
            <h2>AGÊNCIA DE CRIAÇÃO DE SITES</h2>
            <p>
              Nossos sites são desenvolvidos para que você tenha autonomia em gerenciar seu próprio conteúdo.
              Através de um painel administrativo você terá liberdade para adicionar textos, imagens, vídeos e até mesmo criar páginas adicionais. 
            </p>
            <button id="btnbudget">Peça um orçamento</button>
          </div>
        </div>
      </div>
      <div id="service">
        <div id="srv">
          <div id="srvicon">
            <img id="icons" src="../img/icResponsive.svg" alt="seo" />
          </div>
          <div id="srvtxt">
            <h4>SITE RESPONSIVO</h4>
            <p>Um site adaptável para computador, tablet e celular melhora a experiência do usuário, aumentando as interações.</p>
          </div>
        </div>
        <div id="srv">
          <div id="srvicon">
            <img id="icons" src="../img/icDominio.svg" alt="seo" />
          </div>
          <div id="srvtxt">
            <h4>DOMÍNIO PERSONALIZADO</h4>
            <p>Você transmitirá mais credibilidade aos seus clientes com um domínio personalizado. Por exemplo: www.suamarca.com.br
            </p>
          </div>
        </div>
        <div id="srv">
          <div id="srvicon">
            <img id="icons" src="../img/icSeo.svg" alt="seo" />
          </div>
          <div id="srvtxt">
            <h4>ENCONTRADO NO GOOGLE</h4>
            <p>Através de SEO, você alcançará mais clientes com uma boa classificação nos resultados das buscas do Google e Bing.</p>
          </div>
        </div>
        <div id="srv">
          <div id="srvicon">
            <img id="icons" src="../img/icEmail.svg" alt="seo" />
          </div>
          <div id="srvtxt">
            <h4>E-MAIL PROFISSIONAL</h4>
            <p>Profissionalismo das suas comunicações, enviando e recebendo mensagens por um e-mail com sua marca. Por exemplo:
            contato@suamarca.com.br</p>
          </div>
        </div>
        <div id="srv">
          <div id="srvicon">
            <img id="icons" src="../img/icHeadset.svg" alt="seo" />
          </div>
          <div id="srvtxt">
            <h4>SUPORTE CONTÍNUO</h4>
            <p>Oferecemos o Plano de Cuidados com o Site, proporcionando suporte contínuo para garantir a segurança e o bom funcionamento do seu site. </p>
          </div>
        </div>
        <div id="srv">
          <div id="srvicon">
            <img id="icons" src="../img/icMedias.svg" alt="seo" />
          </div>
          <div id="srvtxt">
            <h4>REDES SOCIAIS</h4>
            <p>O conteúdo de seu site compartilhado e podendo ser visto por milhões de pessoas.</p>
          </div>
        </div>
      </div>
      <div id="foot">
        <div id="ftmenu">
          <h4>Menus</h4>
          <p>Home</p>
          <p>Quem Somos</p>
          <p>Portifólio</p>
          <p>Fale Conosco</p>
        </div>
        <div id="ftlogo">
          <img id="logoft" src="../img/logo_sife_bk.svg" alt="logo" />
          <div id="ftlogotxt">
            <p>A SIFE Mídia é uma empresa de criação de sites profissionais que projeta, desenvolve e gerencia sites de alto impacto que geram leads, vendem produtos e contam histórias.</p>
          </div>
        </div>
        <div id="ftmidia">
          <div id="ftmidiarede">
            <h4>Acesse nossas redes</h4>
            <div id="ftmidiaic">
            <RiFacebookFill size={40} id="iconsft" /><ImLinkedin2 size={40} id="iconsft" /><GrInstagram size={40} id="iconsft" /><RiWhatsappLine size={40} id="iconsft" />
            </div>
          </div>
          <div id="ftrede"><HiOutlineMail size={30}/><p>sifemidia@outlook.com</p></div>
        </div>
      </div>
    </>
  )
}

export default App
